import { useState , useEffect } from "react"

const Meals = () => {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/meals")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data)
            })
            .catch((error) => console.error("Error fetching meals:", error));
    }, [])
    return (
        <ul id="meals">
            { 
                // list of meals
            }
        </ul>
    )
}

export default Meals