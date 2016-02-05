var Particle = require("particle-io");
var board = new Particle({
    token: process.env.PARTICLE_TOKEN,
    deviceId: process.env.PARTICLE_DEVICE_ID
});

board.on("ready", function() {
    console.log("CONNECTED");
    this.pinMode("D7", this.MODES.OUTPUT);

    var byte = 0;

    // This will "blink" the on board led
    setInterval(function() {
        this.digitalWrite("D7", (byte ^= 1));
    }.bind(this), 500);
});
