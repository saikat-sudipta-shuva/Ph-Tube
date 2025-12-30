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
    //console.log(cat);

    //create Element
    const categoryDiv=document.createElement("div");
    categoryDiv.innerHTML=`
    <button onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>   
    `;
    //append the element
    categoryContainer.append(categoryDiv);
   // console.log(categories);
  }
}


//video GET

function loadVideos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(res=>res.json())
    .then(data=>{
       // console.log(data.videos);
       displayVideos(data.videos);
      
    })
}

const displayVideos=(videos)=>{
    //console.log(videos);
    const videoContainer = document.getElementById('video-container');
    //when press another button then videoContainer will be empty
    videoContainer.innerHTML=""
    videos.forEach(video=>{
        //console.log(video)
        const videoCard=document.createElement("div");
        videoCard.innerHTML=`
        <div class="card bg-base-100">
  <figure class="relative">
    <img class="w-full h-[150px] object-cover" src="${video.thumbnail}" alt="Shoes" />
    <span class="absolute bottom-2 right-2 text-sm rounded text-white bg-black px-2">3hrs 56 min ago</span>
  </figure>
  <div class=" flex gap-3 px-2 py-5">
    <div class="profile">
        <div class="avatar">
  <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2">
    <img src="${video.authors[0].profile_picture}" />
  </div>
</div>
    </div>
    <div class="intro">
        <h2 class="text-sm font-semibold">Midnight Serenade</h2>
        <p class="text-sm text-gray-400 flex gap-1">${video.authors[0].profile_name}
          <img class="w-5 h-5" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt="">
        </p>
        <p class="text-sm text-gray-400 flex gap-1">${video.others.views}</p>
    </div>
  </div>
  <div>
  </div>
</div> 
        `
        videoContainer.append(videoCard);
    });
};


//Load categoryVideos
const loadCategoryVideos=(id)=>{
      console.log(id);
      const url=`https://openapi.programming-hero.com/api/phero-tube/category/${id}
      
      `
      console.log(url)
      fetch(url)
      .then(res=>res.json())
      .then(data=>displayVideos(data.category))
};



loadCategories();
// loadVideos();

