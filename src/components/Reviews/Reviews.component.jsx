import './Reviews.style.css'
import { getReviews, addReview } from '../../firebase'

const Reviews = () => {
    const allReviews = getReviews()
    console.log(allReviews)
    return (
        <div>
          allReviews.map((review) => {
            return (
                <div className="review">
                    <h3>{review.name}</h3>
                    <p>{review.review}</p>
       </div>
        
        
    )
}

export default Reviews
