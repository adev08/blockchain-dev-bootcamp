import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Navbar from '../components/Navbar';
import Content from './Content';

import { loadWeb3, loadAccount, loadNetworkId, loadToken, loadExchange } from '../store/interactions';
import { contractsLoadedSelector } from '../store/selectors';


class App extends Component {
  componentDidMount() {
    this.loadBlockchainData(this.props.dispatch)
  }

  async loadBlockchainData(dispatch) {
    const web3 = loadWeb3(dispatch)
    await web3.eth.net.getNetworkType()
    const networkId = await loadNetworkId(web3, dispatch)
    await loadAccount(web3, dispatch)

    const token = await loadToken(web3, networkId, dispatch)
    if (!token) {
      window.alert('Token smart contract not deployed to the current network. Please select another network with Metamask.')
      return
    }

    const exchange = await loadExchange(web3, networkId, dispatch)
    if (!exchange) {
      window.alert('Exchange smart contract not deployed to the current network. Please select another network with Metamask.')
      return
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.props.contracsLoaded ? <Content /> : <div className="content"></div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contracsLoaded: contractsLoadedSelector(state)
  }
}
export default connect(mapStateToProps)(App);
