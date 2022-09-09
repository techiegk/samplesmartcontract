module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    // add a new network definition that will self host TestRP
  },
  // add a section for mocha defaults
};
