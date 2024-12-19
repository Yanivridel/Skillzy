import React from 'react';

export interface Review {
    _id: string;
    user: string;
    reviewer: { _id: string, fName: string, lName: string }; // Assuming reviewer is an object
    rating: number;
    reviewText: string;
    createdAt: string;
    __v: number;
}

const TeacherReview = ({ review }: { review: Review }) => {
    const { reviewer, rating, reviewText, createdAt } = review;

    // Format the creation date
    const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    // Render a star rating based on the rating value
    const renderRatingStars = (rating: number) => {
        const fullStars = Array(rating).fill('★');
        const emptyStars = Array(5 - rating).fill('☆');
        return [...fullStars, ...emptyStars].join('');
    };

    return (
        <div className="review-container border-b py-4">
            <div className="flex items-center mb-2">
                {/* Render reviewer's name */}
                <div className="reviewer-name font-semibold text-lg">
                    {reviewer?.fName} {reviewer?.lName}
                </div>
                <div className="ml-2 text-yellow-500">{renderRatingStars(rating)}</div>
            </div>
            <div className="review-text mb-2 text-gray-700">{reviewText}</div>
            <div className="review-date text-sm text-gray-500">{formattedDate}</div>
        </div>
    );
};

export default TeacherReview;
