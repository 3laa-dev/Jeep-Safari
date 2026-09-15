
const HomePageCard = ({ icon, miniTitle, title, text , number }) => {
    return (
        <div className="home-page-card" style={{ "--card-number": `"0${number}"` }}>
            <div className="home-page-card-top">
                <div className="home-page-card-icon" >
                    <i className={icon}></i>
                </div>

                <div className="home-page-card-number">{`0${number}`}</div>
            </div>

            <div className="home-page-card-content">
                <span>{miniTitle}</span>

                <h3>{title}</h3>
                <p>
                    {text}
                </p>

                <div className="home-page-card-line"></div>
            </div>
        </div>
    )
}

export default HomePageCard
