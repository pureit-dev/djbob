import './Reviews.style.css';
import { getReviews, addReview } from '../../firebase';
import { useEffect, useState } from 'react';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const allReviews = getReviews();
        console.log(allReviews)
        setReviews(allReviews);
    }, [])

    const reviewElements = reviews.map((review) => {
        return <div className='review'>
				<h3>{review.name}</h3>
				<p>{review.review}</p>
		</div>
    })
	
    // console.log(reviews)
	return reviewElements
	
};

export default Reviews;
