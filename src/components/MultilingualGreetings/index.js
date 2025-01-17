import {Component} from 'react'

import GreetingItem from '../GreetingItem'

import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class MultilingualGreetings extends Component {
  state = {
    activeGreetingId: languageGreetingsList[0].id,
  }

  clickGreeting = id => {
    this.setState({activeGreetingId: id})
  }

  render() {
    const {activeGreetingId} = this.state
    const activeGreeting = languageGreetingsList.find(
      ({id}) => id === activeGreetingId,
    )

    return (
      <>
        <h1>Multilingual Greetings</h1>
        <ul>
          {languageGreetingsList.map(greetingDetails => (
            <GreetingItem
              greetingDetails={greetingDetails}
              key={greetingDetails.id}
              clickGreeting={this.clickGreeting}
            />
          ))}
        </ul>
        <img
          className="img"
          src={activeGreeting.imageUrl}
          alt={activeGreeting.imageAltText}
        />
      </>
    )
  }
}

export default MultilingualGreetings
