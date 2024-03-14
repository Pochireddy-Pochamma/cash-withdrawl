// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawl extends Component {
  state = {amount: 2000}

  onClickBal = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="app-container">
        <div className="name-container">
          <p className="name">S</p>
          <p className="para">Sarah Williams</p>
        </div>
        <div className="balance-container">
          <h1 className="balance">Your Balance</h1>
          <div className="money-container">
            <p className="money">{amount}</p>
            <p className="rupee">In Rupees</p>
          </div>
        </div>
        <div className="withdraw-container">
          <h1 className="withdraw">Withdraw</h1>
          <p className="sum">CHOOSE SUM (IN RUPEES)</p>
        </div>
        <ul className="list">
          {denominationsList.map(each => (
            <DenominationItem
              key={each.id}
              details={each}
              onClickBal={this.onClickBal}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default CashWithdrawl
