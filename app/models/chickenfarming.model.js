const ChickenUser = require("./chickenuser.model.js");
const sql = require("./db.js");

// constructor
const ChickenFarming = function (farming) {
    this.user_id = farming.user_id;
    this.farming_day = farming.farming_day;
    this.remain_day = farming.remain_day;
    this.start_day = farming.start_day;
};

// Create User Farming Record with user_id, farming_day, 
ChickenFarming.create = (newFarming, result) => {
    sql.query("INSERT INTO tbl_farming SET ?", newFarming, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, { ...res });
    });
};

ChickenFarming.update = (updateFarming, result) => {
    sql.query("UPDATE tbl_farming SET farming_day = farming_day + ?, remain_day = remain_day + ? WHERE user_id = ?", [updateFarming.days, updateFarming.days, updateFarming.user], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, { ...res });
    });
};

ChickenFarming.delete = (deleteFarming, result) => {
    sql.query("DELETE FROM tbl_farming WHERE ? ", deleteFarming, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        result(null, { ...res });
    });
};

ChickenFarming.find = (user, result) => {
    sql.query("SELECT * FROM tbl_farming WHERE ? ", user, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length == 0)
            result(null, null);
        else
            result(null, { ...res[0] });
    });
};

module.exports = ChickenFarming;