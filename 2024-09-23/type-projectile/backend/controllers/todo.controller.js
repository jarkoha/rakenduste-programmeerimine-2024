const crypto = require('crypto');

const todos = [
    {
        id: 1,
        title: "Buy groceries",
        priority: 2,
        createdAt: Date.now(),
        updatedAt: null,
        deleted: false,
    },
    {
        id: 2,
        title: "Schedule doctor appointment",
        priority: 1,
        createdAt: Date.now(),
        updatedAt: null,
        deleted: false,
    },
];

exports.create = (req, res) => {
    const { title, priority } = req.body;

    const newTodo = {
        id: crypto.randomUUID(),
        title: title,
        priority: priority,
        createdAt: Date.now(),
        updatedAt: null,
        deleted: false,
    };

    todos.push(newTodo);

    res.status(201).send(newTodo);
};

exports.read = (req, res) => {
    const activeTodos = todos.filter(todo => !todo.deleted);
    res.send(activeTodos);
};

exports.update = (req, res) => {
    const { id } = req.params;
    const { title, priority } = req.body;

    const todo = todos.find(todo => todo.id === parseInt(id));

    if (!todo) {
        return res.status(404).send({ message: 'ToDo item not found' });
    }

    todo.title = title || todo.title;
    todo.priority = priority || todo.priority;
    todo.updatedAt = Date.now();

    res.send(todo);
};

exports.delete = (req, res) => {
    const { id } = req.params;

    const todo = todos.find(todo => todo.id === parseInt(id));
    if (!todo) {
        return res.status(404).send({ message: 'ToDo item not found' });
    }

    todo.deleted = true;
    todo.updatedAt = Date.now();

    res.send({ message: `ToDo item with id ${id} has been deleted`, todo });
};
