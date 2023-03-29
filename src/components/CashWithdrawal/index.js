// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {string: 'Sarah Williams', balance: 2000}

  onClickSubstract = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {string, balance} = this.state
    const text = string.slice(0, 1)

    return (
      <div className="app-container">
        <div className="content-container">
          <div className="profile-name">
            <div className="first-letter-container">
              <p className="first-letter">{text}</p>
            </div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div>
              <p className="balance">{balance}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="in-rupees">CHOOSE SUM (IN RUPEES)</p>
          <ul className="all-button-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                denomination={eachDenomination}
                key={eachDenomination.id}
                substractValue={this.onClickSubstract}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
