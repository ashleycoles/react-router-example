import { Link } from "react-router-dom";

// Represents a single book on my book listing page
export default function BookListing({id, title, author, image}) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{author}</p>
            <img src={image} alt="" />
            <Link to={`/book/${id}`}>View more</Link>
        </div>
    )
}