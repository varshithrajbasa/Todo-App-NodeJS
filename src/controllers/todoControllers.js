const { default: mongoose } = require("mongoose");
const Todo = require("../models/Todo");

const createTodo = async (req, res) => {
    try {
        const { title } = req.body;
        const newTodo = new Todo({ title, user: req.userId });
        const savedTodo = await newTodo.save();

        res.status(201).json({
            success: true,
            message: "Todo Created Successfully",
            data: savedTodo,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to create Todo",
            error: error.message,
        });
    }
};

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({ user: req.userId });

        res.status(200).json({
            data: todos,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to Fetch Todo",
            error: error.message,
        });
    }
};

const getTodoById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isObjectIdOrHexString(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid Todo ID format",
            });
        }

        const todo = await Todo.findOne({ _id: id, user: req.userId });

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        return res.status(200).json({
            success: true,
            data: todo,
        });
    } catch (error) {
        console.error("Error fetching Todo:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

const updateTodoById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isObjectIdOrHexString(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid Id format",
            });
        }
        const { title, completed } = req.body;

        const updatedTodo = await Todo.findOneAndUpdate(
            { _id: id, user: req.userId },
            { completed },
            {
                new: true,
                runValidators: true,
            },
        );
        if (!updatedTodo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Todo Updated Successfully",
            data: updatedTodo,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

const deleteTodoById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isObjectIdOrHexString(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid Id format",
            });
        }
        const deletedTodo = await Todo.findOneAndDelete({
            _id: id,
            user: req.userId,
        });
        if (!deletedTodo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Todo Deleted Successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

module.exports = {
    createTodo,
    getTodos,
    getTodoById,
    updateTodoById,
    deleteTodoById,
};
