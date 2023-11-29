import { Form, json, redirect, useNavigate, useNavigation } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state ==="submitting";

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" defaultValue={event ? event.title : null} required />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" defaultValue={event ? event.image : null} required />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" defaultValue={event ? event.date : null} required />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" defaultValue={event ? event.description : null} required />
      </p>
      <div className={classes.actions}>
        <button disabled={isSubmitting} type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? "Submitting" : "Save"}</button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function action({request, params}) {
  const data = await request.formData();
  const method = request.method;

  const event = {
      title: data.get("title"),
      image: data.get("image"),
      date: data.get("date"),
      description: data.get("description")
  };

  let url = "http://localhost:8080/events";

  if(method === "PATCH") {
    const id = params.id;
    url = "http://localhost:8080/events/"+id;
  }

  const response = await fetch(url, {
      method: method,
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
