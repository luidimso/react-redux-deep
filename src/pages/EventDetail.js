import { json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetails() {
    const event = useLoaderData();

    return <EventItem event={event.event}></EventItem>;
}

export default EventDetails;

export async function loader({request, params}) {
    const id = params.id;

    const response = await fetch('http://localhost:8080/events/'+id);

    if (!response.ok) {
      throw json({
        message: "Failed to load data with JSON"
      }, {
        status: 500
      });
    } else {
      return response;
    }
}