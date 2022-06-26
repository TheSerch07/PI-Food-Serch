const { Router } = require("express");
const { getRecipes, getRecipesId, postRecipes } = require("../handlers/recipe");

const router = Router();

router.get("/", getRecipes);
router.get("/:id", getRecipesId);
router.post("/", postRecipes);

module.exports = router;