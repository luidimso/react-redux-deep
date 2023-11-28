import { Link } from "react-router-dom";

const DUMMY_EXAMPLE = [1, 2, 3];

function Events() {
    return <ul>
        {DUMMY_EXAMPLE.map((example) => {
            return <li key={example}>
                <Link to={"/events/"+example}>Example {example}</Link>
            </li>
        })}
    </ul>;
}

export default Events;