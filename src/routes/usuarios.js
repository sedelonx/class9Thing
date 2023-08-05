const express = require("express");
const router = express.Router();

const {getAllUsers, getAllUsersById, postAUser, deleteAUser, updateAUser} = require("../controllers/userController");

const authO = require("express-oauth2-jwt-bearer");



router.get("/", authO.requiredScopes("read:users"),getAllUsers);

router.get("/:id", authO.requiredScopes("read:users"), getAllUsersById);

router.post("/", authO.requiredScopes("write:users"), postAUser);

router.put("/:id", authO.requiredScopes("write:users"), updateAUser);

router.delete("/:id", authO.requiredScopes("write:users"), deleteAUser);

module.exports = router;