var pixel = require("node-pixel");
var five = require("johnny-five");
var Particle = require("particle-io");
var firmata = require("firmata");

// var board = new Particle({
//     token: process.env.PARTICLE_TOKEN,
//     deviceId: process.env.PARTICLE_DEVICE_ID
// });

var board = new five.Board({
    io: new Particle({
        token: process.env.PARTICLE_TOKEN,
        deviceId: process.env.PARTICLE_DEVICE_ID
    }),
    // debug: true,
    // port: "/dev/tty.usbmodem1411"
});


console.log("Trying to connect");
board.on("ready", function() {
// var board = new firmata.Board("/dev/tty.usbmodem1411", function() {
// var board = new firmata("/dev/tty.usbmodem1411", function() {
    console.log("Connected");

    this.pinMode("D7", this.MODES.OUTPUT);
    this.pinMode("D6", this.MODES.OUTPUT);
    // this.pinMode("D0", this.MODES.I2C);

    strip = new pixel.Strip({
        // strips: [ {pin: 6, length: 24} ],
        //pin: 6,
        //length: 24,
        //data: 6,
        board: board,
        // firmata: board,
        // controller: "FIRMATA"
        controller: "I2CBACKPACK",
        // strips: [0, 0, 0, 0, 0, 0, 24],
        strips: [0, 24],
        //color_order: pixel.COLOR_ORDER.RGB,
        // address: 0x3F
    });

    strip.on("error", function(err) {
        console.error(err);
    });

    strip.on("ready", function() {
        console.log("strip ready w/ " + strip.stripLength() + " pixels");
        // strip.off();

        var led = 0;

        // This will "blink" the on board led
        setInterval(function() {
            console.log("interval");

            // board.digitalWrite("D7", led);
            // led = led === 0 ? 1 : 0;

            // board.digitalWrite("D6", led);

            strip.color('#FFF');

            var p = strip.pixel(0);
            p.color([255, 255, 0]);

            //strip.show();
        }.bind(this), 1000);
    });
});

board.on("error", function(err) {
    console.error(err);
});
