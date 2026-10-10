const express = require('express');
const { createTodo, getTodos, getTodoById, updateTodoById, deleteTodoById } = require('../controllers/todoControllers');

const router = express.Router();


router.post('/', createTodo);
router.get('/', getTodos);
router.get('/:id', getTodoById);
router.patch('/:id', updateTodoById);
router.delete('/:id', deleteTodoById);

module.exports = router;