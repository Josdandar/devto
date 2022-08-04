let posturl ='https://devto-photoapp-default-rtdb.firebaseio.com/posts/-N8bOAEyt1gDoTKduz1p.json';
let userurl ='https://devto-photoapp-default-rtdb.firebaseio.com/users/-N8RJPww_niZjLYxXLB2.json';

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');

let postsDetailMain = document.querySelector('#post-holder');
let postsLeftAside = document.querySelector('#left-aside');


    const insertPost = (posts, posts2) => {


    templateleft=`
    <div class="d-flex flex-row col-8 flex-lg-column left-aside-icon-container  col-lg-auto justify-content-evenly py-2" id="icongroup-container">

    <div class=" d-flex flex-lg-column col-2  col-lg-1 justify-content-between" id="icon-counter-container">
        <div class="icon-container">
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
        <div class="icon-container">
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
        <div class="icon-container">
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
    console.log(tagsArray)
    let tagstemplate=``;
    tagsArray.forEach(cv => {
        console.log(cv)
        tagstemplate+=`<a href="${cv}" class="card-link">#${cv}</a>`
    });
    template = `
  <div class="card">
    <img src="${posts.postImage}" class="card-img-top" alt="POSTIMAGE" style="height:30%">
    <div class="link-dev d-flex flex-row px-5" id="post_author_holder">
        <div class="flex position-relative image-title">
            <a href="https://dev.to/devteam">
                <img class="image-dev" src="https://picsum.photos/40/40" class="radius-default align-middle" width="40" height="40" alt="The DEV Team p>" alt="">
            </a>
        </div>
        <div class="profile-name">
            <a href="https://dev.to/ben" class="name-profile fw-bold">Ben Halpern</a>
        </div>
    </div>
    <div class="card-title text-styles">
        <h1>${posts.postTitle}</h1>
        ${tagstemplate}
    </div>
    <div class="card-text">
        <p>${posts.postBody}</p>
    </div>
    <div class="card-happy">
        <strong>
        Happy branching :corazón:
        </strong>
        <div class="comments-container d-flex align-items-start">
        
        <div class="form-comments">
            <div class="form-comment-area" tabindex="0">
                <textarea id="comment-content" placeholder="Add to the discussion" class="form-control"
                    aria-label="Add a comment to the discussion"></textarea>
                <div class="comment-form-toolbar d-none px-2">
                    <div class="d-flex form-buttons-toolbar align-items-center">
                        <button type="button" class="btn btn-upload">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" role="img" class="crayons-icon">
                                <path
                                    d="M20 5H4v14l9.292-9.294a1 1 0 011.414 0L20 15.01V5zM2 3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993zM8 11a2 2 0 110-4 2 2 0 010 4z">
                                </path>
                            </svg>
                            <span>Upload image</span>
                        </button>
                        <button type="button" class="btn btn-upload">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" role="img" class="crayons-icon">
                                <path
                                    d="M3 18.5V5a3 3 0 013-3h14a1 1 0 011 1v18a1 1 0 01-1 1H6.5A3.5 3.5 0 013 18.5zM19 20v-3H6.5a1.5 1.5 0 100 3H19zM10 4H6a1 1 0 00-1 1v10.337A3.485 3.485 0 016.5 15H19V4h-2v8l-3.5-2-3.5 2V4z">
                                </path>
                            </svg>
                            <span>Templates</span>
                        </button>
                    </div>
                    <a href="#" class="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                            height="24" role="img"
                            aria-labelledby="a719kqxeiwm2ywzwnm985y3gfefx3v8p" class="crayons-icon">
                            <title id="a719kqxeiwm2ywzwnm985y3gfefx3v8p">Editor guide</title>
                            <path
                                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"
                                fill="">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="comment-form-buttons mt-3 d-none">
                <button type="button" class="btn btn-submit btn-save-comment" disabled>Submit</button>
                <button type="button" class="btn btn-preview" disabled>Preview</button>
            </div>
        </div>
    </div>
    </div>
    </div>`;

     postsDetailMain.innerHTML = template;
     postsLeftAside.innerHTML = templateleft;
     return; }
let AuthorDetailMain = document.querySelector('#user-holder');
    const insertUser = (user) => {
        console.log()
         template = `
         <div class="card my-3  rounded-3 "  id="right-aside-top-card">
         <div class="card-header-color rounded-top just" id="right-aside-card">
         -
         </div>
         <h5 class="card-header py-4">
         ${user.userNickname}
         </h5>
         <img src="${user.userProfilepic}" alt="" class="position-absolute rounded-circle" id="profile-pic">
             <div class="card-body d-flex flex-column justify-content-center ">
                 <a href="#" class="btn btn-primary my-2 fw-bold fs-5">
                     Follow
                 </a>
                 <p class="card-text">
                 ${user.userDescription}
                 </p>
                 <button type="button" class="btn btn-outline-secondary">
                     Visit Profile
                 </button>
             </div>
         </div>
         <div class="card my-3  " id="right-aside-bottom-card">
         <div class="card-header py-3 fs-5 fw-bold">
             More From
             <a class="text-decoration-none fw-bold fs-5" href="#Strapi">
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
         return; }


fetch(posturl)
    .then((res) => {
        return res.json()
    })
    .then((res) => {
        console.log(res)
        insertPost(res,);
    })
    .catch((error) => {
        console.log(error)
    })
// const getPostById = (postId) =>{
//     let url = 'https://devto-photoapp-default-rtdb.firebaseio.com/posts/' + postId + '/.json'
//     fetch( url ,{
//     method: 'GET'
//     })
//     .then(function(plainText){
//         let jsonResponsePromise = plainText.json()
//         return jsonResponsePromise
//     })
//     .then((postDetail) =>{
//         console.log(postDetail)
//     })
// }

fetch(userurl)
    .then((res) => {
        return res.json()
    })
    .then((res) => {

        insertUser(res);
    })
    .catch((error) => {
        console.log(error)
    })
