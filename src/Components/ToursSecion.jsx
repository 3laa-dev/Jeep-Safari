import ToursRow from "./ToursRow";
import img from "../assets/FULL_5fdc1822-dcfe-4196-a2a6-41955950aae0.png"
const tours = [
    {
        id: 1,
        image: img,
        title: "Taurus Mountains Safari",
        duration: "7 Hours",
        description:
            "Discover the Taurus Mountains, traditional villages and breathtaking landscapes.",
        price: "€35"
    },
    {
        id: 2,
        image: img,
        title: "Green Canyon Safari",
        duration: "6 Hours",
        description:
            "Enjoy an unforgettable journey through nature, mountains and crystal-clear waters.",
        price: "€40"
    },
    {
        id: 3,
        image: img,
        title: "Alanya Jeep Adventure",
        duration: "8 Hours",
        description:
            "Explore the hidden beauty of Alanya with an exciting off-road adventure.",
        price: "€30"
    },
    {
        id: 4,
        image: img,
        title: "Village & Mountain Tour",
        duration: "6 Hours",
        description:
            "Experience local village life, stunning mountain views and authentic Turkish culture.",
        price: "€32"
    },
    {
        id: 5,
        image: img,
        title: "Family Jeep Safari",
        duration: "7 Hours",
        description:
            "A fun-filled safari experience designed for families and adventure lovers.",
        price: "€35"
    }
];


const ToursSection = () => {

    return (
        <section className="tours-section" id="tours">

            <div className="tours-heading">

                <span className="section-eyebrow">
                    DISCOVER ALANYA
                </span>

                <h2>
                    OUR <span>ADVENTURES</span>
                </h2>

                <p>
                    Choose your next adventure and discover the beauty
                    of Alanya and the Taurus Mountains.
                </p>

            </div>


            <ToursRow tours={tours} />


            <div className="tours-more">

                <button>
                    VIEW ALL TOURS

                    <span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </span>
                </button>

            </div>

        </section>
    );
};

export default ToursSection;