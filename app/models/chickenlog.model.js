const sql = require("./db.js");
const ChickenUser = require('./chickenuser.model');

// constructor
const ChickenLog = function (log) {
  this.user_id = log.user_id;
  this.user_access_time = log.user_access_time;
};

ChickenLog.create = (newLog, result) => {
  ChickenUser.find(newLog, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    sql.query("INSERT INTO tbl_log SET ?", { user_id: res.id }, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      result(null, { id: res.insertId, ...newLog });
    });
  });
};

module.exports = ChickenLog;
