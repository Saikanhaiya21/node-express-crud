const express = require("express");
const mongooseUserRouter = express.Router();
const MongooseUserController = require("../controllers/mongooseExample");

mongooseUserRouter.get("/", MongooseUserController.fetchAll);
mongooseUserRouter.post("/", MongooseUserController.addUser);
mongooseUserRouter.get("/:id", MongooseUserController.findById);
mongooseUserRouter.put("/:id", MongooseUserController.updateById);
mongooseUserRouter.delete("/:id", MongooseUserController.deleteById);

module.exports = mongooseUserRouter;
