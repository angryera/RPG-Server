const router = require('express').Router()


module.exports = app => {
    const chickens = require("../controllers/chickenfarm.controller.js");

    // // Create a new Customer
    // app.post("/customers", customers.create);

    // This is when the user connect to wallet
    app.post("/chickenfarm/access", chickens.access);

    // This is the api when user initial loading.
    app.get("/chickenfarm/getUserAssets", chickens.getUserAssets);

    // This is the api when user start new farming
    app.post("/chickenfarm/newFarming", chickens.newFarming);

    // This is the api when user increase the days of farming
    app.post("/chickenfarm/increaseDay", chickens.increaseDays);

    // This is the api when user buy Eggs
    app.post("/chickenfarm/buyEggs", chickens.buyEggs);

    // This is the api when user buy Farms
    app.post("/chickenfarm/buyFarms", chickens.buyFarms);

    // This is the api when user buy Foods
    app.post("/chickenfarm/buyFoods", chickens.buyFoods);

    // This is the api when user claim eggs
    app.post("/chickenfarm/claimEggs", chickens.claimEggs);

    // This is the api when user claim chickens
    app.post("/chickenfarm/claimChickens", chickens.claimChickens);

    // This is the api when user get Farming information
    app.get("/chickenfarm/getUserFarming", chickens.getUserFarming);

    // This is the api when the user deposite chickens
    app.post("/chickenfarm/depositeChickens", chickens.depositeChickens)
};
