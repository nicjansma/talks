var Cylon = require('cylon');

// Initialize the robot
Cylon.robot({
  connections: {
    voodoospark: {
      adaptor: 'voodoospark',
      accessToken: process.env.PARTICLE_TOKEN,
      deviceId: process.env.PARTICLE_DEVICE_ID,
      module: 'cylon-spark'
    }
  },

  devices: {
    led: { driver: 'led', pin: 'D7' }
  },

  work: function(my) {
    every((1).second(), function() {
      my.led.toggle();
    });
  }
}).start();
