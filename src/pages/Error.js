import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    let message = "An error ocurred!";

    if(error.status == 500) {
        message = error.data.message;
    }

    if(error.status == 404) {
        message = "Page not found";
    }

    return <p>{message}</p>
}

export default ErrorPage;