export default function App(){
  const title = "Product Categories";
  const Categories =[
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ];
    return (
      <div id="category-section" className="p-5">
        <p className="text-2xl text-gray-500 mb-3">{title}</p>
        <div>
          {Categories.map((catagory) => (
            <button className="border border-gray-800 me-3 px-3 py-4">{catagory}</button>
          )            
          )}
        </div>
      </div>
    );
  
}