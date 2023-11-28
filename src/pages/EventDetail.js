import { useParams } from "react-router-dom";

function EventDetails() {
    const params = useParams();

    return <h1>Event {params.id}</h1>;
}

export default EventDetails;