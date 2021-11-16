const { Config_DevMode } = require("../Config/server.config");

module.exports = {
    Log: function (data) {
        if (Config_DevMode)
            console.log(data);
    }
}