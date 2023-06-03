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
	const submitData = (formData) => {
		addReview({
			name: formData.Name,
			review: formData.Review,
			rating: formData.Rating,
		});
	};
	const formConfig = [
		{ label: 'Name', type: 'text', className: 'review-form-text' },
		{
			label: 'Review',
			type: 'textarea',
			className: 'review-form-textarea',
		},
		{
			label: 'Rating',
			text: '☆',
			type: 'radio',
			name: 'rating',
			id: '5',
			values: [5, 4, 3, 2, 1],
			className: 'success-rating-icons',
		},

		{ label: 'Submit', type: 'button', className: 'review-form-button' },
	];

	return (
		<>
			<div className='review-form-container'>
				<Form config={formConfig} onClick={submitData} />
			</div>
			<Suspense fallback={<div>Loading...</div>}>
				<Await resolve={dataPromise.reviews}>
					{(reviews) => (
						<div className='reviews'>
							<hr></hr>
							<h1 className='review-title'>Reviews</h1>
							<div className='reviews-container'>
								{reviews.map((review, index) => {
									let rating = '';
									for (let i = 0; i < review.rating; i++) {
										rating += `★ `;
									}
									if(index < 4){

										return (
											<div key={index} className='review'>
												<p className='review-stars'>
													{rating}
												</p>
												<q className='review-rating'>
													{review.review}
												</q>
	
												<p className='review-name'>
													{review.name}
												</p>
											</div>
										);
									}
								})}
							</div>
						</div>
					)}
				</Await>
			</Suspense>
		</>
	);
};

export default Reviews;
