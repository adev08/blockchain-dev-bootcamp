// eslint-disable-next-line no-undef
const Token = artifacts.require("Token");

module.exports = function(deployer) {
  deployer.deploy(Token);
};
