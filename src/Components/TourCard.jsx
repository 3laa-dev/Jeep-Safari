const TourCard = ({ image, title, duration, description, price }) => {
    return (
        <article className="tour-card">

            <div className="tour-card-image">
                <img src={image} alt={title} />

                <div className="tour-duration">
                    <i className="fa-regular fa-clock"></i>
                    {duration}
                </div>
            </div>


            <div className="tour-card-content">

                <span className="tour-category">
                    JEEP SAFARI
                </span>

                <h3>{title}</h3>

                <p>
                    {description}
                </p>


                <div className="tour-card-bottom">

                    <div className="tour-price">
                        <small>From</small>
                        <strong>{price}</strong>
                    </div>

                    <button className="tour-arrow">
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>

                </div>

            </div>

        </article>
    );
};

export default TourCard;