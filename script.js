console.log("script.js added")

function loadCategories(){
    console.log("categoy is loading")
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res=>res.json())
    .then(data=>{
        dispalyCategories(data.categories);
    })
}

function dispalyCategories(categories){
    console.log(categories)
}


loadCategories();