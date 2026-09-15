const ReviewCard = ({ name, date, rating, text }) => {
    return (
        <article className="review-card">

            <div className="review-card-header">

                <div className="review-avatar">
                    {name.charAt(0).toUpperCase()}
                </div>

                <div className="review-user">
                    <h3>{name}</h3>
                    <span>{date}</span>
                </div>

            </div>


            <div className="review-rating">
                {"★".repeat(rating)}
            </div>


            <p className="review-text">
                {text}
            </p>


            <div className="review-card-footer">
                <span>Verified experience</span>
            </div>

        </article>
    );
};

export default ReviewCard;