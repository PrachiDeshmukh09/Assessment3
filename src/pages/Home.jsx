import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
function Home() {
    const searchRef = useRef(null);
    const recipes = [
        { id: 1, name: "Veg Biryani" },
        { id: 2, name: "Paneer Masala maggie" },
        { id: 3, name: "Veg Momos" },
    ];
    useEffect(() => {
        searchRef.current.focus();
    }, []);
    return (
        <div>
            <h1>Recipe App</h1>
            <input type="text" placeholder="Search recipes........." ref={searchRef} />
            <h2>All Recipes</h2>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>
                            {recipe.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Home;


