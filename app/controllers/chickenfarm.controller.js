const ChickenLog = require("../models/chickenlog.model.js");
const ChickenUser = require("../models/chickenuser.model.js");
const ChickenFarming = require('../models/chickenfarming.model');
const { foodPerChicken } = require("../config/farm.config.js");

// Leave Access log to database.
exports.access = (req, res) => {
    ChickenLog.create(req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                type: "Error",
                message: "Error retrieving User with wallet address " + req.params.wallet
            });
        } else {
            res.send(data);
        }
    });
};

// Get All assets of the user in the initial load
exports.getUserAssets = (req, res) => {
    ChickenUser.getUserAssets(req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                type: "Error",
                message: "Error retrieving User Assets with wallet address " + req.params.wallet
            });
        } else {
            res.send(data);
        }
    });
};

// Get User Farming Info.
exports.getUserFarming = (req, res) => {
    ChickenUser.getUserIdByWallet(req.query, (err, data) => {
        ChickenFarming.find({ user_id: data.id }, (err, data) => {
            if (err) {
                res.status(500).send({
                    type: "Error",
                    message: "Error retrieving Farming with wallet address " + req.params.wallet
                });
            } else {
                res.send(data);
            }
        });
    });
}

// Deposite Chickens with wallet address
/**
 * TODO : Token Sync
 * @param wallet
 * @param count
 */
exports.depositeChickens = (req, res) => {
    if (req.body.count > 0)
        // TODO : Token Sync
        ChickenUser.updateChickens(res.body, (err, data) => {
            if (err) {
                res.status(500).send({
                    type: "Error",
                    message: "Error Depositing Chickens with wallet address " + req.params.wallet
                });
            } else {
                res.status(200).send({
                    type: "Success",
                    message: "Chicken Deposited",
                    ...data
                });
            }
        });
    else
        res.status(500).send({
            type: "Error",
            message: "Invalid Chicken Count " + req.params.wallet
        });
}

// Sell Chickens with wallet address in the marketplace
/**
 * TODO : Token Sync
 * @param wallet
 * @param count
 */
exports.sellChickens = (req, res) => {
    if (req.body.count < 0)
        ChickenUser.updateChickens(res.body, (err, data) => {
            if (err) {
                res.status(500).send({
                    type: "Error",
                    message: "Error Sell Chickens with wallet address " + req.params.wallet
                });
            } else {
                res.status(200).send({
                    type: "Success",
                    message: "Chicken Sold",
                    ...data
                });
            }
        })
    else
        res.status(500).send({
            type: "Error",
            message: "Invalid Chicken Count " + req.params.wallet
        });
}

// Move Chickens to the farm
exports.moveChickens = (req, res) => {
    if (req.body.count > 0)
        ChickenUser.find(req.body, (err, res_user) => {
            ChickenFarming.find(res_user.id, (err, res_farming) => {
                if (err) {
                    res.status(500).send({
                        message: "Error Sell Chickens with wallet address " + req.params.wallet
                    });
                } else {
                    if (!!res_farming) {
                        ChickenUser.moveChickens(req.body, (err, res_move) => {
                            if (err) {
                                res.status(500).send({
                                    message: "Error Sell Chickens with wallet address " + req.params.wallet
                                });
                            }
                            else {
                                res.status(200).send({
                                    type: "Success",
                                    message: "Chicken Moved",
                                    ...res_move
                                });
                            }
                        });
                    }
                    else
                        res.status(200).send({
                            type: "Info",
                            message: "Not Farming Now : " + req.params.wallet
                        });
                }
            });
        });
    else
        res.status(500).send({
            message: "Invalid Chicken Count " + req.params.wallet
        });
}

// New Farming
exports.newFarming = (req, res) => {
    if (req.body.days < 0) {
        ChickenUser.find(req.body, (err, data) => {
            ChickenFarming.create({ user_id: data.id, farming_day: req.body.days }, (req, data_farming) => {
                if (err) {
                    res.status(500).send({
                        type: "Error",
                        message: "Error New Farming with wallet address " + req.params.wallet
                    });
                } else {
                    res.status(200).send({
                        type: "Success",
                        message: "New Farming Created",
                        ...data_farming
                    });
                }
            });
        });
    } else
        res.status(500).send({
            type: "Error",
            message: "Invalid Farming Days Count " + req.params.wallet
        });
}

// Increase days
exports.increaseDays = (req, res) => {
    if (req.body.days > 0) {
        ChickenUser.find(req.body, (err, data) => {
            ChickenFarming.update({
                days: req.body.days,
                user: data.id
            }, (err, data) => {
                if (err) {
                    res.status(500).send({
                        type: "Error",
                        message: "Error Increase Day with wallet address " + req.params.wallet
                    });
                } else {
                    res.status(200).send({
                        type: "Success",
                        message: "Farming day increased",
                        ...data
                    });
                }
            })
        });
    } else
        res.status(500).send({
            type: "Error",
            message: "Invalid Farming Days Count " + req.params.wallet
        });
}

// Buy Eggs with wallet address
/**
 * TODO : Token Sync
 * @param wallet
 * @param count
 */
exports.buyEggs = (req, res) => {
    if (req.body.count > 0)
        // TODO : Token Sync
        ChickenUser.updateEggs(res.body, (err, data) => {
            if (err) {
                res.status(500).send({
                    type: "Error",
                    message: "Error Buy Eggs with wallet address " + req.params.wallet
                });
            } else {
                res.status(200).send({
                    type: "Success",
                    message: "Buy Eggs",
                    ...data
                });
            }
        });
    else
        res.status(500).send({
            type: "Error",
            message: "Invalid Eggs Count " + req.params.wallet
        });
}

// Buy Foods with wallet address
/**
 * TODO : Token Sync
 * @param wallet
 * @param count
 */
exports.buyFoods = (req, res) => {
    if (req.body.count > 0)
        // TODO : Token Sync
        ChickenUser.updateFoods(res.body, (err, data) => {
            if (err) {
                res.status(500).send({
                    type: "Error",
                    message: "Error Buy Foods with wallet address " + req.params.wallet
                });
            } else {
                res.status(200).send({
                    type: "Success",
                    message: "Buy Foods",
                    ...data
                });
            }
        });
    else
        res.status(500).send({
            type: "Error",
            message: "Invalid Foods Count " + req.params.wallet
        });
}

// Buy Farms with wallet address
/**
 * TODO : Token Sync
 * @param wallet
 * @param count
 */
exports.buyFarms = (req, res) => {
    if (req.body.count > 0)
        // TODO : Token Sync
        ChickenUser.updateFarms(res.body, (err, data) => {
            if (err) {
                res.status(500).send({
                    type: "Error",
                    message: "Error Buy Farms with wallet address " + req.params.wallet
                });
            } else {
                res.status(200).send({
                    type: "Success",
                    message: "Buy Farms",
                    ...data
                });
            }
        });
    else
        res.status(500).send({
            type: "Error",
            message: "Invalid Farms Count " + req.params.wallet
        });
}

exports.claimEggs = (req, res) => {
    ChickenUser.find(req.body, (err, data) => {
        ChickenUser.updateEarnedEggs({
            count: req.body.user_eggs_claim,
            wallet: req.body.wallet
        }, (err, data_claim) => {
            if (err) {
                res.status(500).send({
                    type: "Error",
                    message: "Error Claim Eggs with wallet address " + req.params.wallet
                });
            } else {
                ChickenUser.updateEggs({
                    count: data.user_eggs_claim,
                    wallet: req.body.wallet
                }, (err, data_eggs) => {
                    if (err) {
                        res.status(500).send({
                            type: "Error",
                            message: "Error Claim Eggs with wallet address " + req.params.wallet
                        });
                    } else {
                        ChickenUser.find(req.body, (err, data) => {
                            res.status(200).send({
                                type: "Success",
                                message: "Claim Eggs",
                                ...data
                            });
                        });
                    }
                });
            }
        });
    });
}

exports.claimChickens = (req, res) => {
    ChickenUser.find(req.body, (err, data) => {
        ChickenUser.updateEarnedChickens({
            count: req.body.user_chickens_claim,
            wallet: req.body.wallet
        }, (err, data_claim) => {
            if (err) {
                res.status(500).send({
                    type: "Error",
                    message: "Error Claim Chickens with wallet address " + req.params.wallet
                });
            } else {
                ChickenUser.updateChickens({
                    count: data.user_eggs_claim,
                    wallet: req.body.wallet
                }, (err, data_eggs) => {
                    if (err) {
                        res.status(500).send({
                            type: "Error",
                            message: "Error Claim Chickens with wallet address " + req.params.wallet
                        });
                    } else {
                        ChickenUser.find(req.body, (err, data) => {
                            res.status(200).send({
                                type: "Success",
                                message: "Claim Chickens",
                                ...data
                            });
                        });
                    }
                });
            }
        });
    });
}


// Buy Chickens
// Buy Eggs
// Buy Farms