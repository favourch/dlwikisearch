const options = {
  AT: {
    sandbox: true, //false if going to prod
    apiKey: "0de8c3196461a914c3136e0e82186db81a43a2a23eb0e15d323dfce8b7a8edbb", //Your Africas Talking Sandox or Live Key
    username: "sandbox", // Your Username: "sandbox" for testing...
    format: "json",
  },

  PORT: process.env.PORT || 5050,
};

module.exports = options;
