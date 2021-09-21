const router = require("express").Router();
const userController = require("../controllers/user.controller");

router.post("/new-user", userController.addUser);
router.get("/show-user/:id", userController.getOneUSer);
router.put("/update-user/:id", userController.updateUser);
router.delete("/delete-user/:id", userController.deleteUser);

module.exports = router;
