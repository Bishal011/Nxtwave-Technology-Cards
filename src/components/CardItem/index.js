// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} card-item`}>
      <h1 className="head1">{title}</h1>
      <p className="para1">{description}</p>
      <div className="img-container">
        <img className="img1" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
