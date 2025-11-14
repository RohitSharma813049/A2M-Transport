const router = require("express").Router();
const adminMiddleware = require("../middleware/adminmidleware");
const { getAllUsers, deleteUser } = require("../controller/adminuser");

router.get("/users", adminMiddleware, getAllUsers);
router.delete("/users/:id", adminMiddleware, deleteUser);

module.exports = router;
