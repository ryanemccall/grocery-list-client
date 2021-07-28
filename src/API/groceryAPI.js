// import React, { useState } from "react";
// import groceryResults from "./groceryResults";

// const baseURL = 'https://api.edamam.com/api/recipes/v2';
// const key = "d5336fb1c8dc17b7457bbe78fec76f33";
// const app_id = "b2836723";
// const type  = "public";


// const GroceryListApp = () => {
//     const [ search, setSearch] = useState('');
//     const [ results, setResults] = useState([]);

//     const fetchResults = () => {
//         let url = `${baseURL}?type=${type}&q=${search}&app_id=${app_id}&app_key=${key}`;

//         fetch(url)
//         .then(res => res.json())
//         .then(data => setResults(data.response.docs))
//         .catch(err => console.log(err));
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         fetchResults();
//     };

//     return (
//         <div>
//             <div>
//                 <form onSubmit={(e) => handleSubmit(e)}>
//                     <span>Enter a food, beverage, or even a time like summer or fall for ideas (required) :</span>
//                     <input type='text' name='search' onChange={(e) => setSearch(e.target.value)} required />
//                     <button>Get Recipes!</button>
//                 </form>
//                 {
//                     results.length > 0 ? <groceryResults results={results} /> : null
//                 }
//             </div>
//         </div>
//     )
// }

// export default GroceryListApp;