const Places = (props) => {
    const { title, location, map, startDate, endDate, desc, img } = props
    return (
        <div className="place">
            <div className="place__img">
                <img src={img} alt={location} />
            </div>
            <div className="place__content">
                <div className="place__map">
                    <i className="fa fa-map-marker" aria-hidden="true"></i><span className="location">{location}</span>
                    <a target="_blank" rel="noreferrer" href={map}>View on Google Maps</a>
                </div>
                <div className="place__head">
                    <h1>{title}</h1>
                </div>
                <div className="place__date">
                    {startDate} - {endDate}
                </div>
                <div className="place__desc">
                    <p>
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Places