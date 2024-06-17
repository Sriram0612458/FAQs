import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isClicked: false}

  clicking = () => {
    this.setState(prev => ({isClicked: !prev.isClicked}))
  }

  answer = answerText => {
    const {isClicked} = this.state
    if (isClicked) {
      return (
        <div>
          <hr className="horixontal" />
          <p className="answer-para">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {isClicked} = this.state
    const {faqsList1} = this.props
    const {questionText, answerText} = faqsList1
    const imageUrl = isClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    return (
      <li className="list-item">
        <div className="subb">
          <h1 className="para">{questionText}</h1>
          <button className="button" onClick={this.clicking}>
            <img
              src={imageUrl}
              className="image"
              alt={isClicked ? 'minus' : 'plus'}
            />
          </button>
        </div>
        {this.answer(answerText)}
      </li>
    )
  }
}

export default FaqItem
