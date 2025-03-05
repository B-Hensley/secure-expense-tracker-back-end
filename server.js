const { ApolloServer } = require("apollo-server");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Mongoose Expense Schema
const expenseSchema = new mongoose.Schema({
    id: Number,
    description: String,
    amount: Number,
    category: String,
});

const Expense = mongoose.model("Expense", expenseSchema);

const app = express();
app.use(cors());

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*'
    },
});

// GraphQL Schema (typeDefs)
const typeDefs = `
    type Expense {
        id: ID!
        description: String!
        amount: Float!
        category: String!
    }

    type Query {
        expenses: [Expense!]
    }

    type Mutation {
        addExpense(description: String!, amount: Float!, category: String!): Expense!
        deleteExpense(id: ID!): Boolean
    }
`;

// GraphQL Resolvers
const resolvers = {
    Query: {
        expenses: async () => await Expense.find(),
    },
    Mutation: {
        addExpense: async (_, { description, amount, category }) => {
            const newExpense = new Expense({id: Date.now(), description, amount, category});
            await newExpense.save();
            io.emit("expenseAdded", newExpense);
            return newExpense;
        },
        deleteExpense: async (_, { id }) => {
            const result = await Expense.deleteOne({id});
            io.emit("expenseDeleted", id);
            return result.deletedCount === 1;
        },
    },
};

// Apollo Server Setup
const server = new ApolloServer({ typeDefs, resolvers });
server.start().then(() => {
    server.applyMiddleware({ app });
});

io.on("connection", (socket) => {
    console.log('A user connected');
    socket.on('addExpense', async (expense) => {
        io.emit("expenseAdded", expense);
    });
    socket.on('deleteExpense', (id) => {
        io.emit("expenseDeleted", id);
    });
});

httpServer.listen(4000, () => {
    console.log(`Server is running on http://localhost:4000`);
    console.log(`GraphQL endpoint: http://localhost:4000/graphql`);
});
