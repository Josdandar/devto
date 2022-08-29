// Selectores DOM
 const token = localStorage.getItem("token") || ""
 let userid="";
 if(token){
 const payload = token.split(".")[1];
 userid = JSON.parse(atob(payload)).id
 }


const postsDetailMain = document.querySelector('#post-holder');
const postsLeftAside = document.querySelector('#left-aside');
const createPostBtn = document.querySelector('.button-create-post');
const mentorContainer = document.querySelector("#mentor-container");
const AuthorDetailMain = document.querySelector('#user-holder');
const postOwner= false;


//!por el momento lo meto manual
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');


const postURL = `http://localhost:8080/posts/${postId}`



createPostBtn.addEventListener('click', () => { window.location.href = `/createPost.html` });



const insertUser = async () => {
    url=`http://localhost:8080/users/${posts.postAuthorId}`
    const response = await fetch(url, {
      method: "GET",
      headers: {
      }
    })
    const jsonData = await response.json()
    const user = jsonData.data
    console.log("userpic:",user.userProfilePic)
    template = `
    <div class="card my-3  rounded-3 "  id="right-aside-top-card">
     <div class="card-header-color rounded-top just" id="right-aside-card">
     -
     </div>
     <h5 class="card-header py-4">
      ${user.userNickname}
     </h5>
     <img src="${user.userProfilePic}" alt="" class="position-absolute rounded-circle" id="profile-pic">
         <div class="card-body d-flex flex-column justify-content-center ">
             <a href="#" class="btn btn-primary my-2 fw-bold fs-5">
                 Follow
             </a>
             <p class="card-text">
            
             </p>
             <button type="button" class="btn btn-outline-secondary">
                 Visit Profile
             </button>
         </div>
     </div>
     <div class="card my-3  " id="right-aside-bottom-card">
     <div class="card-header py-3 fs-5 fw-bold">
         More From
         <a class="text-decoration-none fw-bold fs-5" href="http://127.0.0.1:5502/search.html?searchId=${posts.postAuthor}">
         ${user.userNickname}
         </a>
     </div>
     <ul class="list-group list-group-flush fs-5">
         <li class="list-group-item py-3" >
             <a  class="text-decoration-none fs-6"  id="right-aside-card-list"href="">
                 <div>
                     CSS Logos: GitHub logo
                 </div>
                 <div>
                     #CSS #beginners #webdev
                 </div>
             </a>
         </li>
         <li class="list-group-item py-3" >
             <a class="text-decoration-none fs-6"  id="right-aside-card-list" href="">
                 <div>
                     10 Algorithms Every Developer Should Learn
                 </div>
                 <div>
                     #CSS #beginners #webdev
                 </div>
             </a>
         </li>
         <li class="list-group-item py-3" >
             <a class="text-decoration-none fs-6 " id="right-aside-card-list" href="">
                 <div>
                     Pathfinding with Javascript: The A* Algorithm
                 </div>
                 <div>
                     #CSS #beginners #webdev
                 </div>
             </a>
         </li>
     </ul>
 </div>`;
     AuthorDetailMain.innerHTML = template;
     return user
  }



addEventListener("DOMContentLoaded", async (e) => {
  e.preventDefault()

  
  const response = await fetch(`${postURL}`, {
    method: "GET"
  })
  const jsonData = await response.json()

  posts=jsonData.data.post

  var editOwner = "invisible";
  if (posts.postAuthorId===userid){
    editOwner="" 
  }
  
  const user = await insertUser();
  console.log("usuario:",user)
  templateleft=`
  <div class="d-flex flex-row col-8 flex-lg-column left-aside-icon-container  col-lg-auto justify-content-evenly py-2" id="icongroup-container">
  
      <div class=" d-flex flex-lg-column col-2  col-lg-1 justify-content-between" id="icon-counter-container">
          <div class="icon-container" id="like-heart">
              <input type="checkbox" id="aside-icon-checkboxheart" class="checkboxhider">
              <label for="aside-icon-checkboxheart" class="checkedlabel" id="checkboxheaartlabel">
                <img src="./assets/images/SVG/heart.png" alt="" class="aside-icon-default">
                <img src="./assets/images/SVG/hearthover.png" alt="" class="aside-icon-hover">
                <img src="./assets/images/SVG/heartcheked.png" alt="" class="aside-icon-cheked" id="heart">
              </label>
          </div>
          <div class="counter-container d-flex align-items-center justify-content-center">
                  <Span>${posts.postLikesCount}</Span>
          </div>
      </div>
      <div class=" d-flex flex-lg-column col-2  col-lg-1 justify-content-between" id="icon-counter-container">
          <div class="icon-container" id="unicorn-click">
              <input type="checkbox" id="aside-icon-checkboxunicorn" class="checkboxhider">
              <label for="aside-icon-checkboxunicorn" class="checkedlabel" id="checkboxheaartlabel">
                <img src="./assets/images/SVG/unicorn.png" alt="" class="aside-icon-default">
                <img src="./assets/images/SVG/unicornhover.png" alt="" class="aside-icon-hover">
                <img src="./assets/images/SVG/unicorncheked.png" alt="" class="aside-icon-cheked" id="unicorn">
              </label>
          </div>
          <div class="counter-container d-flex align-items-center justify-content-center">
              <Span>${posts.postUnicornCount}</Span>
          </div>
      </div>
      <div class=" d-flex flex-lg-column col-2 justify-content-between col-lg-1" id="icon-counter-container">
          <div class="icon-container" id="save-flag">
              <input type="checkbox" id="aside-icon-checkboxsave" class="checkboxhider">
              <label for="aside-icon-checkboxsave" class="checkedlabel" id="checkboxheaartlabel">
                <img src="./assets/images/SVG/save.png" alt="" class="aside-icon-default">
                <img src="./assets/images/SVG/savehover.png" alt="" class="aside-icon-hover">
                <img src="./assets/images/SVG/savercheked.png" alt="" class="aside-icon-cheked" id="save">
              </label>
          </div>
          <div class="counter-container d-flex align-items-center justify-content-center">
              <Span>${posts.postSavedCount}</Span>
          </div>
  
      </div>
      <div class=" d-flex flex-lg-column col-2 justify-content-between col-lg-1" id="icon-counter-container">
          <div class="icon-container">
              <input type="checkbox" id="aside-icon-checkboxdots" class="checkboxhider">
              <label for="aside-icon-checkboxdots" class="checkedlabel">
              <img src="./assets/images/SVG/dots.png" alt="" class="aside-icon-default">
              <img src="./assets/images/SVG/dotshover2.png" alt="" class="aside-icon-hover">
              <img src="./assets/images/SVG/dotshover2.png" alt="" class="aside-icon-cheked" id="dots">
              <div class="pop-menu-container">
                  <ul class="menu-list p-1 m-0 d-flex flex-column" >
                      <li id="list-header"><a class="dropdown-item" href="#"><b>Copylink</b></a></li>
                      <li id="list-item"><a class="dropdown-item" href="#">Share to Twitter</a></li>
                      <li id="list-item"><a class="dropdown-item" href="#">Share to LinkedIn</a></li>
                      <li id="list-item"><a class="dropdown-item" href="#">Share to Reddit</a></li>
                      <li id="list-item"><a class="dropdown-item" href="#">Share to Hacker News</a></li>
                      <li id="list-item"><a class="dropdown-item" href="#">Share to Facebook</a></li>
                      <li id="list-item"><a class="dropdown-item" href="#">Share Post via...</a></li>
                      <li id="list-item"><a class="dropdown-item" href="#" >Report Abuse</a></li>
                  </ul>
                  <div class="list-menu-icon-container">
  
                  </div>
              </div>
          </div>
      </div>
  </div>
  `
      let tagsArray2 = posts.postTags.join(' ')
      let tagsArray = tagsArray2.split(" ");
      let tagstemplate=``;
      tagsArray.forEach(cv => {
          tagstemplate+=`<a href="${cv}" class="card-link">#${cv}</a>`
      });
      template = `
    <div class="card ">
      <img src="${posts.postImage}" class="img-top " alt="POSTIMAGE" >
      <div class="link-dev d-flex flex-row px-5 py-2" id="post_author_holder">        
          <div class="flex position-relative image-title">
              <a href="https://dev.to/devteam">
                  <img class="image-dev" src="${user.userProfilePic}" class="radius-default align-middle" width="40" height="40" alt="" alt="">
              </a>
          </div>
          <div class="profile-name">
              <a href="http://127.0.0.1:5502/search.html?searchId=${posts.postAuthor}" class="name-profile fw-bold ms-3">${posts.postAuthor}
              </a>
          </div>
      </div>
      <div class="card-title text-styles">
          <h1>${posts.postTitle}</h1>
          ${tagstemplate}
      </div>
      <div class="card-text">
          <p>${posts.postBody}</p>
          <a href="/editPost.html?postId=${postId}"><button type="button" class="btn btn-outline-primary ${editOwner}">Edit Post</button></a>
      </div>
      
  </div>
  `;
       postsDetailMain.innerHTML = template;
       postsLeftAside.innerHTML = templateleft;
       
})


//!de aqyu para abajo no esta terminado





