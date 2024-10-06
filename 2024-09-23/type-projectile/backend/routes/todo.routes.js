const express = require("express");
const { body, param } = require("express-validator");
const router = express.Router();
const todoController = require("../controllers/todo.controller");
const {
  todoRouteMiddleware,
  todoGetRouteMiddleware,
} = require("../middlewares/todo.middlewares");

router.use(todoRouteMiddleware);

router.get("/", todoGetRouteMiddleware, todoController.read);

router.post(
  "/", 
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("priority")
      .isInt({ min: 1, max: 5 })
      .withMessage("Priority must be an integer between 1 and 5"),
  ],
  todoController.create);

router.put(
  "/:id",
  [
    param("id").isUUID().withMessage("Invalid ToDo ID format"),
    body("title").optional().notEmpty().withMessage("Title must not be empty"),
    body("priority")
      .optional()
      .isInt({ min: 1, max: 5 })
      .withMessage("Priority must be an integer between 1 and 5"),
  ],
  todoController.update
);

router.delete(
  "/:id",
  [
    param("id").isUUID().withMessage("Invalid ToDo ID format"),
  ],
  todoController.delete
);

module.exports = router;