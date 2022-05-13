import Categories from "./components/Categories.js";

const categories = await fetch("/categories").then((response)=> response.json()).catch((err)=>console.error(err.message));

const root = ReactDOM.createRoot(document.getElementById("categories-container"));
root.render(<Categories categories={categories}/>);


(()=>{
  // Show content
  const activeTitle = document.getElementsByClassName("active")[0],
    con = activeTitle.nextElementSibling;
  con.style.maxHeight = con.scrollHeight + "px";
})();


const headings = document.querySelectorAll(".faq h3");
headings.forEach(heading=>{
  heading.addEventListener("click", toggleContentDisplay)
});

function toggleContentDisplay() {

  // Check for active content
  const activeTitle = document.getElementsByClassName("active")[0];
  if (activeTitle) {

    // Hide node
    activeTitle.classList.remove("active");
    activeTitle.nextElementSibling.style.maxHeight = null;

    // Check if active content is the requested content to hide by user 
    if (activeTitle.isSameNode(this)) return;
  }

  // Show requested content
  const title = this,
    con = title.nextElementSibling;
  con.style.maxHeight = con.scrollHeight + "px";
  title.classList.add("active");
}