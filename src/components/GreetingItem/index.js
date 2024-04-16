const GreetingItem = props => {
  const {greetingDetails, clickGreeting} = props

  const {id, buttonText} = greetingDetails

  const onClickGreetingItem = () => {
    clickGreeting(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickGreetingItem}>
        {buttonText}
      </button>
    </li>
  )
}

export default GreetingItem
