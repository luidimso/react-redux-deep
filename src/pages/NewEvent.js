import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

function NewEvent() {
    return <EventForm></EventForm>;
}

export default NewEvent;

export async function action({request, params}) {
    const data = await request.formData();

    const event = {
        title: data.get("title"),
        image: data.get("image"),
        date: data.get("date"),
        description: data.get("description")
    };

    const response = await fetch("http://localhost:8080/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    });

    if(!response.ok) {
        throw json({
            message: "Failed to save data"
          }, {
            status: 500
          });
    } else {
        return redirect("/events");
    }
}