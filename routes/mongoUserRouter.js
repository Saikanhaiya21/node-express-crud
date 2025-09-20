const express = require("express");
const mongoUserRouter = express.Router();
const MongoUserController = require("../controllers/mongoUsers");

mongoUserRouter.get("/", MongoUserController.fetchAll);
mongoUserRouter.post("/", MongoUserController.addUser);
mongoUserRouter.get("/:id", MongoUserController.findById);
mongoUserRouter.put("/:id", MongoUserController.updateById);
mongoUserRouter.delete("/:id", MongoUserController.deleteById);

module.exports = mongoUserRouter;
