module.exports = app => {
    const rpg = require("../controllers/rpg.controller.js");

    // Create a new Customer
    app.post("/rpg/character/addCharacter/:address", rpg.addCharacter);

    app.post("/rpg/character/equipWeapon/:address", rpg.equipWeapon)
};