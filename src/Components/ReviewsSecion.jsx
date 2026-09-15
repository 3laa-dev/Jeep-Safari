import ReviewsRow from "./ReviewsRow";

const reviews = [
    {
        name: "Julia",
        date: "11 Aug 2026",
        rating: 5,
        text: "Wycieczka zdecydowanie godna polecenia! Warto to przeżyć ❤️"
    },
    {
        name: "Victor George",
        date: "11 Aug 2026",
        rating: 5,
        text: "Super, es war spannend, lustig und schön. Es gab viele Wasserschlachten und eine sehr lange und schöne Jeep Fahrt."
    },
    {
        name: "Regina",
        date: "09 Aug 2026",
        rating: 5,
        text: "Das war ein gelungener Ausflug für Groß und Klein. Wir wurden morgens pünktlich am Hotel abgeholt."
    },
    {
        name: "Anonymous",
        date: "12 Aug 2026",
        rating: 5,
        text: "Fantastisch verbrachte Zeit, voller Abenteuer und wunderschöner Aussichten. Sehr empfehlenswert."
    },
    {
        name: "Michael",
        date: "08 Aug 2026",
        rating: 5,
        text: "Amazing experience from start to finish. The guide was friendly and the whole trip was very enjoyable."
    }
];


const ReviewsSection = () => {

    return (
        <section className="reviews-section">

            <div className="reviews-heading">

                <span className="section-eyebrow">
                    REAL EXPERIENCES
                </span>

                <h2>
                    WHAT OUR <span>ADVENTURERS</span> SAY
                </h2>

                <div className="reviews-summary">

                    <div className="summary-stars">
                        ★★★★★
                    </div>

                    <strong>4.8</strong>

                    <span>
                        1,734 verified guest reviews
                    </span>

                </div>

            </div>


            <ReviewsRow reviews={reviews} />


            <div className="reviews-action">
                <button>
                    READ ALL REVIEWS
                    <span>→</span>
                </button>
            </div>

        </section>
    );
};

export default ReviewsSection;