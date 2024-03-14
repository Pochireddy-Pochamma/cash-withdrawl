// Write your code here
import './index.css'

const DenominationItem = props => {
  const {details, onClickBal} = props
  const {value} = details

  const clickVal = () => {
    onClickBal(value)
  }

  return (
    <li className="container">
      <button type="button" className="button" onClick={clickVal}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
