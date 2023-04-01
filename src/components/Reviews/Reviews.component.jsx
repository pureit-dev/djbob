import './Reviews.style.css';
import { getReviews, addReview } from '../../firebase';
import { Suspense } from 'react';
import { useLoaderData, defer, Await } from 'react-router-dom';
import Form from '../Form/Form.component';

export function loader() {
	return defer({ reviews: getReviews() });
}

const Reviews = () => {
	
	const dataPromise = useLoaderData();

	
	return (
        <>
        <Form />
		<Suspense fallback={<div>Loading...</div>}>
			<Await resolve={dataPromise.reviews}>
				{(reviews) => (
					<div className='reviews'>
						{reviews.map((review, index) => {
							return (
								<div key={index} className='review'>
									<p>{review.name}</p>
									<p>{review.review}</p>
                                    <p>{review.rating}</p>
								</div>
							);
						})}
					</div>
				)}
			</Await>
		</Suspense>
        </>
	);
};

export default Reviews;
