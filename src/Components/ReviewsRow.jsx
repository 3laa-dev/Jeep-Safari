import ReviewCard from "./ReviewCard";

const ReviewsRow = ({ reviews }) => {

    return (
        <div className="reviews-row">

            <div className="reviews-track">

                
                <div className="reviews-set">
                    {reviews.map((review, index) => (
                        <ReviewCard
                            key={`first-${index}`}
                            {...review}
                        />
                    ))}
                </div>


                <div className="reviews-set" aria-hidden="true">
                    {reviews.map((review, index) => (
                        <ReviewCard
                            key={`second-${index}`}
                            {...review}
                        />
                    ))}
                </div>

            </div>

        </div>
    );
};

export default ReviewsRow;