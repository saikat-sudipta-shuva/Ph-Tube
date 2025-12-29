console.log("script.js added")

function loadCategories(){
    console.log("categoy is loading")
    //fetch data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    //convert promise to json
    .then(res=>res.json())
    //send data to display
    .then(data=>{
        dispalyCategories(data.categories);
    })
}

function dispalyCategories(categories){
    //get the container
    const categoryContainer= document.getElementById("category-container")
    //loop operation on array of object
    for (let cat of categories ){
        console.log(cat);
  
    //create Element
    const categoryDiv=document.createElement("div");
    categoryDiv.innerHTML=`
    <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>   
    `;
    //append the element
    categoryContainer.append(categoryDiv);
   // console.log(categories);
  }
}
loadCategories();

