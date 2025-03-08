const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");

const PORT = process.env.PORT || 5700;

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
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
app.use(cors({
    origin: '*'
}));
app.use(helmet());
app.use((req, res, next) => {
    res.setHeader(
        "X-Frame-Options",
        "DENY"
    );
    res.setHeader(
        "X-Content-Type-Options",
        "nosniff"
    );
    res.setHeader(
        "X-XSS-Protection",
        "1; mode=block"
    );
    res.setHeader(
        "Content-Security-Policy",
        `default-src 'self'; img-src 'self' https://*; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; connect-src 'self' https://* ws://${PORT}`
    );
    res.setHeader(
        "X-Powered-By",
        "Express"
    );
    next();
});

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
        updateExpense(id: ID!, description: String, amount: Float): Expense!
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
        updateExpense: async (_, { id, description, amount }) => {
            const update = {}
            if (description !== undefined) update.description = description;
            if (amount !== undefined) update.amount = amount;
            const updatedExpense = await Expense.findOneAndUpdate({id}, update, {new: true, runValidators: true});
            if (!updatedExpense) throw new Error("Expense not found");
            io.emit("expenseUpdated", updatedExpense);
            return updatedExpense;
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
    socket.on('updateExpense', (expense) => {
        io.emit("expenseUpdated", expense);
    });
});

httpServer.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    console.log(`GraphQL endpoint: ${PORT}/graphql`);
});
