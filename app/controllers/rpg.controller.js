const web3Config = require("../config/web3.config");

// Create and Save a new Customer
exports.addCharacter = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
};

exports.equipWeapon = (req, res) => {
  if(!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  var address = req.params.address;
  var characterId = req.body.characterId;
  var weaponId = req.body.weaponId;
  web3Config.gameContract.methods.equipWeapon(address, characterId, weaponId).call({
    from: web3Config.wallContract
  }).then(function(result) {
    res.status(200).send({
      message: "Success!"
    });
  });
}