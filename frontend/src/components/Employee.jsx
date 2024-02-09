import { Link } from "react-router-dom";

export default function Employee({person}) {
    return (
        <div>
            <Link to={'{}'}>Name: {person.first_name} {person.last_name} || Role: {person.role}</Link>

        </div>

    )
}