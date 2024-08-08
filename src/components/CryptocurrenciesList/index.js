// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    isLoading: true,
    currenciesData: [],
  }

  componentDidMount() {
    this.getcurrenciesData()
  }

  getcurrenciesData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))

    this.setState({currenciesData: formattedData, isLoading: false})
  }

  renderCurrenciesDetails = () => {
    const {currenciesData} = this.state
    return (
      <div className="cryptocurrencieslist-container">
        <h1 className="list-heading">CryptoCurrency Tracker</h1>
        <img
          className="list-image"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="list">
          <div className="list-container">
            <div className="list-card-one">
              <p className="coin-type">Coin Type</p>
              <div className="list-card-two">
                <p className="list-usd">USD</p>
                <p className="list-euro">EURO</p>
              </div>
            </div>
            <ul>
              {currenciesData.map(item => (
                <CryptocurrencyItem key={item.id} currencyData={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="cryptocurrencieslist">
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderCurrenciesDetails()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
