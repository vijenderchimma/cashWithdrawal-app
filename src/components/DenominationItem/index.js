// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denomination, substractValue} = props
  const {value} = denomination
  const onClickSubstract = () => {
    substractValue(value)
  }

  return (
    <li className="btn-container">
      <button type="button" className="button-el" onClick={onClickSubstract}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
