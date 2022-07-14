import Places from "./Places";
import pdata from "../data/places-data";

const places = pdata.map((place) => {
    return (
        <Places key={place.id}
            title={place.title}
            location={place.location}
            map={place.googleMapsUrl}
            startDate={place.startDate}
            endDate={place.endDate}
            desc={place.description}
            img={place.imageUrl}
        />
    )
})

const Content = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    {places}
                </div>
            </div>
        </section>
    )
}
export default Content