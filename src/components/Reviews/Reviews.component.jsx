import './Reviews.style.css';
import { getReviews, addReview } from '../../firebase';
import React, { Suspense } from 'react';
import { useLoaderData, defer, Await } from 'react-router-dom';
import Form from '../Form/Form.component';

export function loader() {
	return defer({ reviews: getReviews() });
}

const Reviews = () => {
	const dataPromise = useLoaderData();
	const [moreReviews, setMoreReviews] = React.useState(false);

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
			placeholder: 'Tell us about your experience with DJ Bob',
			maxLength: 100,
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
				<h1>Tell us what you thought of your DJ Bob disco!</h1>
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
									if (index < 4 && !moreReviews) {
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
									} else if (moreReviews) {
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
							<p
								className='review-more-less'
								onClick={() => setMoreReviews(!moreReviews)}
							>
								{moreReviews ? 'Less' : 'More'}
							</p>
						</div>
					)}
				</Await>
			</Suspense>
		</>
	);
};

export default Reviews;
