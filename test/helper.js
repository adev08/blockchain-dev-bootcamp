
export const EVM_REVERT = 'VM Exception while processing transaction: revert'

const Web3 = require('web3')
export const tokens = (n) => {
    return new Web3.utils.BN(
        Web3.utils.toWei(n.toString(), 'ether')
    )
}  