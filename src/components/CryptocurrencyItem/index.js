// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {currencyData} = props
  const {id, currencyName, usdValue, euroValue, currencyLogo} = currencyData
  return (
    <li className="item-container">
      <div className="item-card-one">
        <img src={currencyLogo} className="currency-logo" alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="item-card-two">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
