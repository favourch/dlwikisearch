const options = {
  AT: {
    sandbox: true, //false if going to prod
    apiKey: "e7wetwet87te987tf9wt7e9fw7tf9q7tef9qt9qet97tf97q97ef97q97", //Your Africas Talking Sandox or Live Key
    username: "sandbox", // Your Username: "sandbox" for testing...
    format: "json",
  },

  PORT: process.env.PORT || 5050,
};

module.exports = options;
