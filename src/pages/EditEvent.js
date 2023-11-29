import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEvent() {
    const event = useRouteLoaderData("event-details");

    return <EventForm event={event.event} method="patch"></EventForm>;
}

export default EditEvent;