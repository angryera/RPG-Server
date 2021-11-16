
module.exports = app => {
    const rpg = require("../controllers/rpg.controller.js");
  
    // Create a new Customer
    app.post("/rpg/character/addCharacter/:address", rpg.addCharacter);
  
    app.post("/rpg/character/equipWeapon/:address", rpg.equipWeapon)

    // // Retrieve all Customers
    // app.get("/customers", customers.findAll);
  
    // // Retrieve a single Customer with customerId
    // app.get("/customers/:customerId", customers.findOne);
  
    // // Update a Customer with customerId
    // app.put("/customers/:customerId", customers.update);
  
    // // Delete a Customer with customerId
    // app.delete("/customers/:customerId", customers.delete);
  
    // // Create a new Customer
    // app.delete("/customers", customers.deleteAll);
  };