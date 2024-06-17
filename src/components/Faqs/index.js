import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="main">
      <div className="sub-div">
        <h1 className="heading">FAQs</h1>
        <ul className="ul-list">
          {faqsList.map(each => (
            <FaqItem faqsList1={each} key={each.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
