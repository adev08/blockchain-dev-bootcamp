// WEB3
export function web3Loaded(connection) {
    return { 
        type: 'WEB3_LOADED',
        connection
    }
}

export function web3AccountLoaded(account) {
    return { 
        type: 'WEB3_ACCOUNT_LOADED',
        account
    }
}

export function networkIdLoaded(networkId) {
    return { 
        type: 'NETWORK_ID_LOADED',
        networkId
    }
}

//TOKEN
export function tokenLoaded(contract) {
    return {
        type: 'TOKEN_LOADED',
        contract
    }
}

//EXCHANGE

export function exchangeLoaded(exchange) {
    return { 
        type: 'EXCHANGE_LOADED',
        exchange
    }
}

