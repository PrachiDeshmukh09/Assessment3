import { useParams, Link } from 'react-router-dom'
function RecipeDetails() {
    const { id } = useParams();
    return (
        <div>
            <h1>Recipe Details</h1>
            <p>Recipe ID: {id}</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
}
export default RecipeDetails;

