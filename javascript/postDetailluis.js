// let posturl ='https://devto-photoapp-default-rtdb.firebaseio.com/posts/-N8RJPxsdXMuHVLLs-30.json';
// let userurl ='https://devto-photoapp-default-rtdb.firebaseio.com/users/-N8RJPww_niZjLYxXLB2.json';

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');

let postsDetailMain = document.querySelector('#post-holder');
let postsLeftAside = document.querySelector('#left-aside');


    const insertPost = (posts) => {


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
    let tagsArray = posts.postTags.split(" ");
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
    <div class="card mb-img">
        <div class="card-body">
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--sn4XzJyl--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://pbs.twimg.com/profile_images/839643754126417920/6trsFcTQ_normal.jpg" alt="The Practical Dev profile image">
          <div class="twitter-access">
            The Practical Dev
          </div>
          <div class="twitter-dev">
            <a href="https://dev.to/thepracticaldev">
                @thepracticaldev</a>
          </div>
          <div class="twitter-logo">
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--ir1kO05j--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/twitter-f95605061196010f91e64806688390eb1a4dbc9e913682e043eb8b1e06ca484f.svg" alt="Twitter-log">
          </div>
          <div class="twitter-actions">
            <a href="https://tiwitter.com/intent/twet?in reply to=762709515133485056">
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--fFnoeFxk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/twitter-reply-action-238fe0a37991706a6880ed13941c3efd6b371e4aefe288fe8e0db85250708bc4.svg" alt="coment">
            </a>
            <a href="https://twitter.com/intent/retweet?tweet_id=762709515133485056">
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--k6dcrOn8--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/twitter-retweet-action-632c83532a4e7de573c5c08dbb090ee18b348b13e2793175fea914827bc42046.svg" alt="">
            </a>
            <a href="https://twitter.com/intent/like?tweet_id=762709515133485056">
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--SRQc9lOp--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/twitter-like-action-1ea89f4b87c7d37465b0eb78d51fcb7fe6c03a089805d7ea014ba71365be5171.svg" alt="">
            </a>
          </div>
        </div>
      </div>
    <div class="card-happy">
        <strong>
        Happy branching :corazón:
        </strong>
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


// fetch(posturl)
//     .then((res) => {
//         return res.json()
//     })
//     .then((res) => {

//         insertPost(res);
//     })
//     .catch((error) => {
//         console.log(error)
//     })
const getPostById = (postId) =>{
    let url = 'https://devto-photoapp-default-rtdb.firebaseio.com/posts/' + postId + '/.json'
    fetch( url ,{
    method: 'GET'
    })
    .then(function(plainText){
        let jsonResponsePromise = plainText.json()
        return jsonResponsePromise
    })
    .then((postDetail) =>{
        console.log(postDetail)
    })
}

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
