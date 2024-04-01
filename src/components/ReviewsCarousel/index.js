// Write your code
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  forwardItem = () => {
    const {count} = this.state
    this.setState(pervState => ({count: pervState.count + 1}))
    if (count >= 3) {
      this.setState({count: 3})
    }
  }

  backwardItem = () => {
    const {count} = this.state
    this.setState(pervState => ({count: pervState.count - 1}))
    if (count <= 0) {
      this.setState({count: 0})
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const countedItem = reviewsList[count]
    return (
      <div className="main-container">
        <h1 className="reviews-heading">Reviews</h1>
        <div className="content-container">
          <button type="button" className="button" data-testid="leftArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              onClick={this.backwardItem}
            />
          </button>

          <div className="details-container">
            <img src={countedItem.imgUrl} alt={countedItem.username} />
            <p className="person-name">{countedItem.username}</p>
            <p className="company-name">{countedItem.companyName}</p>
            <p className="company-name">{countedItem.description}</p>
          </div>

          <button type="button" className="button" data-testid="rightArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              onClick={this.forwardItem}
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
