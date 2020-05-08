const options = {
  AT: {
    sandbox: true, //false if going to prod
    apiKey: "533e31f426eeaad116badc21aaf5e5fe3b5d7272775957948e0b10bd1a8ba13f", //Your Africas Talking Sandox or Live Key
    username: "sandbox", // Your Username: "sandbox" for testing...
    format: "json",
  },

  PORT: process.env.PORT || 5050,
};

module.exports = options;
