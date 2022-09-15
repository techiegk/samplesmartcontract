module.exports = {
  networks: {
    coverage: {
      host: "127.0.0.1",
      port: 8555,
      network_id: "*" // Match any network id
    },
    // add a new network definition that will self host TestRP
  },
  // add a section for mocha defaults
  mocha: {
    reporter: "eth-gas-reporter",
    reporterOptions: {
     excludeContracts: ['Migrations'],
     showTimeSpent: false
    }
  },
  plugins: ["solidity-coverage"],
};
