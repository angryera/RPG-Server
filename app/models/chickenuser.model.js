const sql = require("./db.js");

// constructor
const ChickenUser = function (user) {
  this.wallet = user.wallet;
};

// Create User with user wallet address, and return user info
ChickenUser.create = (newUser, result) => {
  sql.query("INSERT INTO tbl_users SET ?", { user_wallet_address: newUser.wallet }, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    ChickenUser.find(newUser, (err, res) => {
      result(null, { ...res });
    });
  });
};

// Find User info with user wallet address, if not found create new user
ChickenUser.find = (user, result) => {
  sql.query("SELECT * FROM tbl_users WHERE ?", { user_wallet_address: user.wallet }, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length == 0) {
      ChickenUser.create(user, (err, res) => {
        result(null, { ...res })
      });
    } else {
      result(null, { ...res[0] })
    }
  });
}

ChickenUser.updateChickens = (user, result) => {
  sql.query("UPDATE tbl_users SET user_free_chickens = user_free_chickens + ? WHERE user_wallet_address = ?", [user.count, user.wallet], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    ChickenUser.find(user, (err, res) => {
      result(null, { ...res });
    });
  });
}

// Get User assets with user wallet address
ChickenUser.getUserAssets = (user, result) => {
  ChickenUser.find(user, (err, res) => {
    result(null, { ...res });
  });
};

ChickenUser.getUserIdByWallet = (user, result) => {
  ChickenUser.find(user, (err, res) => {
    result(null, { ...res });
  });
};

ChickenUser.moveChickens = (user, result) => {
  sql.query("UPDATE tbl_users SET user_free_chickens = user_free_chickens - ? , user_farming_chickens = user_farming_chickens + ? WHERE user_wallet_address = ?", [user.count, user.count, user.wallet], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    ChickenUser.find(user, (err, res) => {
      result(null, { ...res });
    });
  });
}

ChickenUser.updateEggs = (user, result) => {
  sql.query("UPDATE tbl_users SET user_eggs = user_eggs + ? WHERE user_wallet_address = ?", [user.count, user.wallet], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    ChickenUser.find(user, (err, res) => {
      result(null, { ...res });
    });
  });
}

ChickenUser.updateFoods = (user, result) => {
  sql.query("UPDATE tbl_users SET user_remain_food = user_remain_food + ? WHERE user_wallet_address = ?", [user.count, user.wallet], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    ChickenUser.find(user, (err, res) => {
      result(null, { ...res });
    });
  });
}

ChickenUser.updateFarms = (user, result) => {
  sql.query("UPDATE tbl_users SET user_farms = user_farms + ? WHERE user_wallet_address = ?", [user.count, user.wallet], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    ChickenUser.find(user, (err, res) => {
      result(null, { ...res });
    });
  });
}

ChickenUser.updateEarnedEggs = (user, result) => {
  sql.query("UPDATE tbl_users SET user_eggs_claim = ? WHERE user_wallet_address = ?", [user.count, user.wallet], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    ChickenUser.find(user, (err, res) => {
      result(null, { ...res });
    });
  });
}
module.exports = ChickenUser;
