import Categories from "./components/Categories.js";

const categories = await fetch("/categories").then((response)=> response.json()).catch((err)=>console.error(err.message));

const root = ReactDOM.createRoot(document.getElementById("categories-container"));
root.render(<Categories categories={categories}/>);