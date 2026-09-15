import TourCard from "./TourCard";

const ToursRow = ({ tours }) => {
    return (
        <div className="tours-row">
            {tours.slice(0, 5).map((tour) => (
                <div className="tour-column" key={tour.id}>
                    <TourCard {...tour} />
                </div>
            ))}
        </div>
    );
};

export default ToursRow;