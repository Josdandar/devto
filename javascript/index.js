// Define URLs for fetching the data
let urlPosts = "http://localhost:8080/posts/";
//"https://devto-photoapp-default-rtdb.firebaseio.com/users.json"
let urlUserProfile = ""
const token = localStorage.getItem("token") || ""
if(token){
    const payload = token.split(".")[1]
    const userId = JSON.parse(atob(payload)).id
    console.log(userId);
    let urlUserProfile = `http://localhost:8080/users/${userId}`;
}


let validate = localStorage.getItem("token")

const insertNav = (validate) => {
  if (!validate) {
    let navbarEvent = document.querySelector("#navbar");
    let templateNavbar = "";
    templateNavbar = `
    <div class="container d-flex align-items-center">
    <div class="d-flex align-items-center">
        <button id="offcanvas_btn" class="btn d-inline-block d-md-none navbar-toggler burguer-button"
            type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample">
            <span class="navbar-toggler-icon nav-span"></span>
        </button>
        <a class="navbar-brand" href="#" alt="logo"><img src="/assets/icons/logo.png" alt=""></a>


        <div class="collapse navbar-collapse d-md-flex" id="navbarSupportedContent">
            <div class="input-wrapper">
                <input type="search" class="input input-search" id="find-input" placeholder="Search...">
                <svg xmlns="http://www.w3.org/2000/svg" class="input-icon" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    </div>
    <div class="right-nav d-flex align-items-center">
        <div class="nav-button">
            <button type="button" class="btn btn-outline-primary button-login">Login</button>
        </div>
        <a href="#"><img src="/assets/icons/notifications.png" alt="" srcset="" class="p1_icon"></a>
        <div class="dropdown" id="dropdown-user">
            
        </div>
    </div>
</div>
</div>
<!-- Inicio de offcanvas -->
<div class="offcanvas offcanvas-start custom-nav-off" tabindex="-1" id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Dev Community</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <div>
            <div class="container-home">
                <div class="list-group">

                    <ul class="list-home">
                        <li> <a href="#" style="text-decoration:none" class="bi"><img
                                    src="/assets/icons/home.png" alt="" srcset=""> Home</a></li>
                        <li> <a href="#" style="text-decoration:none" class="bi"><img
                                    src="/assets/icons/reading_list.png">
                                ReadingList</li>
                        <li> <a href="#" style="text-decoration:none" class="bi"><img
                                    src="/assets/icons/listing.png">
                                Listings</a> </li>
                        <li> <a href="#" style="text-decoration:none" class="bi"><img
                                    src="/assets/icons/podcasts.png">
                                Podcasts</a></li>
                        <li> <a href="#" style="text-decoration:none" class="bi"><img
                                    src="/assets/icons/videos.png">
                                Videos</a></li>
                        <li> <a href="#" style="text-decoration:none" class="bi"><img
                                    src="/assets/icons/tags.png">
                                Tags</a></li>
                        <li> <a href="#" style="text-decoration:none" class="bi"><img
                                    src="/assets/icons/faq.png">
                                FAQ</a></li>
                        <li> <a href="#" style="text-decoration:none" class="bi"><img
                                    src="/assets/icons/shop.png">
                                Forem Shop</a></li>
                        <li> <a href="#" style="text-decoration:none" class="bi">
                                <img src="/assets/icons/sponsors.png">Sponsors
                            </a></li>
                        <li><a href="#" style="text-decoration:none" class="bi"><img
                                    src="/assets/icons/about_new.png">
                                About</a></li>
                        <li> <a href="#" style="text-decoration:none" class="bi"><img
                                    src="/assets/icons/contact.png">
                                Contact</a></li>
                        <li> <a href="#" style="text-decoration:none" class="bi"><img
                                    src="/assets/icons/guides_new.png">Guides</a></li>
                    </ul>
                </div>
            </div>
            <div class="container-others">
                <ul class="list-others">
                    <li>
                        <h5>Other</h5>
                    </li>
                    <li><a href="#" class="bi" style="text-decoration:none"><img
                                src="/assets/icons/thumb_up.png"></img>Code ofConduct</a></li>
                    <li><a href="#" class="bi" style="text-decoration:none"><img
                                src="/assets/icons/policy.png"></img>Privacy Policy</a></li>
                    <li><a href="#" class="bi" style="text-decoration:none"><img
                                src="/assets/icons/eyes.png"></img>Terms
                            of Use</a></li>
                </ul>
            </div>

            <div class="container-media">
                <ul class="menu-media">
                    <a href="#"><i class="bi bi-twitter"></i></a>
                    <a href="#"><i class="bi bi-facebook"></i></a>
                    <a href="#"><i class="bi bi-github"></i></a>
                    <a href="#"><i class="bi bi-instagram"></i></a>
                    <a href="#"><i class="bi bi-chat-left-text"></i></a>
                </ul>
            </div>

        </div>
    </div>
</div>
    
    
    
    `;
    navbarEvent.innerHTML = templateNavbar;
    let loginBtn = document.querySelector(".button-login");
    loginBtn.addEventListener("click", () => {
      window.location.href = `/createUser.html`;
    });
  } else {
    let navbarEvent = document.querySelector("#navbar");
    let templateNavbar = "";
    templateNavbar = `
    <div class="container d-flex align-items-center">
    <div class="d-flex align-items-center">
        <button id="offcanvas_btn" class="btn d-inline-block d-md-none navbar-toggler burguer-button"
            type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample">
            <span class="navbar-toggler-icon nav-span"></span>
        </button>
        <a class="navbar-brand" href="#" alt="logo"><img src="/assets/icons/logo.png" alt=""></a>


        <div class="collapse navbar-collapse d-md-flex" id="navbarSupportedContent">
            <div class="input-wrapper">
                <input type="search" class="input input-search" id="find-input" placeholder="Search...">
                <svg xmlns="http://www.w3.org/2000/svg" class="input-icon" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    </div>
    <div class="right-nav d-flex align-items-center">
        <div class="nav-button">
            <button type="button" class="btn btn-outline-primary button-create-post">Create
                post</button>
        </div>
        <a href="#"><img src="/assets/icons/notifications.png" alt="" srcset="" class="p1_icon"></a>
        <div class="dropdown" id="dropdown-user">
            
        </div>
    </div>
</div>
</div>
<!-- Inicio de offcanvas -->
<div class="offcanvas offcanvas-start custom-nav-off" tabindex="-1" id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Dev Community</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <div>
            <div class="container-home">
                <div class="list-group">

                    <ul class="list-home">
                        <li> <a href="#" style="text-decoration:none" class="bi"><img
                                    src="/assets/icons/home.png" alt="" srcset=""> Home</a></li>
                        <li> <a href="#" style="text-decoration:none" class="bi"><img
                                    src="/assets/icons/reading_list.png">
                                ReadingList</li>
                        <li> <a href="#" style="text-decoration:none" class="bi"><img
                                    src="/assets/icons/listing.png">
                                Listings</a> </li>
                        <li> <a href="#" style="text-decoration:none" class="bi"><img
                                    src="/assets/icons/podcasts.png">
                                Podcasts</a></li>
                        <li> <a href="#" style="text-decoration:none" class="bi"><img
                                    src="/assets/icons/videos.png">
                                Videos</a></li>
                        <li> <a href="#" style="text-decoration:none" class="bi"><img
                                    src="/assets/icons/tags.png">
                                Tags</a></li>
                        <li> <a href="#" style="text-decoration:none" class="bi"><img
                                    src="/assets/icons/faq.png">
                                FAQ</a></li>
                        <li> <a href="#" style="text-decoration:none" class="bi"><img
                                    src="/assets/icons/shop.png">
                                Forem Shop</a></li>
                        <li> <a href="#" style="text-decoration:none" class="bi">
                                <img src="/assets/icons/sponsors.png">Sponsors
                            </a></li>
                        <li><a href="#" style="text-decoration:none" class="bi"><img
                                    src="/assets/icons/about_new.png">
                                About</a></li>
                        <li> <a href="#" style="text-decoration:none" class="bi"><img
                                    src="/assets/icons/contact.png">
                                Contact</a></li>
                        <li> <a href="#" style="text-decoration:none" class="bi"><img
                                    src="/assets/icons/guides_new.png">Guides</a></li>
                    </ul>
                </div>
            </div>
            <div class="container-others">
                <ul class="list-others">
                    <li>
                        <h5>Other</h5>
                    </li>
                    <li><a href="#" class="bi" style="text-decoration:none"><img
                                src="/assets/icons/thumb_up.png"></img>Code ofConduct</a></li>
                    <li><a href="#" class="bi" style="text-decoration:none"><img
                                src="/assets/icons/policy.png"></img>Privacy Policy</a></li>
                    <li><a href="#" class="bi" style="text-decoration:none"><img
                                src="/assets/icons/eyes.png"></img>Terms
                            of Use</a></li>
                </ul>
            </div>

            <div class="container-media">
                <ul class="menu-media">
                    <a href="#"><i class="bi bi-twitter"></i></a>
                    <a href="#"><i class="bi bi-facebook"></i></a>
                    <a href="#"><i class="bi bi-github"></i></a>
                    <a href="#"><i class="bi bi-instagram"></i></a>
                    <a href="#"><i class="bi bi-chat-left-text"></i></a>
                </ul>
            </div>

        </div>
    </div>
</div>
    
    
    
    `;
    navbarEvent.innerHTML = templateNavbar;
    //When clicking on the 'Create Post' button it will display the createPost page.
    let createPostBtn = document.querySelector(".button-create-post");
    createPostBtn.addEventListener("click", () => {
      window.location.href = `/createPost.html`;
    });
  }
};

// Load user Profile data
insertNav(validate);
let userProfile = document.querySelector("#dropdown-user");
const insUserProfile = (user) => {
    console.log("User", user)
  let templateUser = "";
  templateUser += `
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">${user.userName} ${user.userLastname}<br>@${user.userNickname}</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a class="dropdown-item" href="#">Dashboard</a></li>
        <li><a class="dropdown-item" href="#">Create Post</a></li>
        <li><a class="dropdown-item" href="#">Reading List</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a class="dropdown-item" href="#">Sign Out</a></li>
    </ul>
    <style>
        .dropdown-toggle::after {
            content: none;
                                }
    </style>
    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"
        role="button" aria-expanded="false"><img src=${user.userProfilepic} alt="" srcset=""
            class="profile"></a>

</div>
`;
  userProfile.innerHTML = templateUser;
};

// Select where the cards will be inserted
let postsMainCards = document.querySelector("#main_posts_cards");
let postsMainCards2 = document.querySelector("#main_posts_cards2");

// Function for inserting post cards in the html
const insertPost = async (posts) => {
  // Insert first card (to display an img)
  let template = "";
  console.log("posts", posts);
  let tagsArray = posts[0].postTags.join("\n");
  let tagsArray2 = tagsArray.split("\n");
  let urlUserPost = `http://localhost:8080/users/${posts[0].postAuthorId}`
  console.log("urlUserPost", urlUserPost)
  const userInfo = await fetch(`${urlUserPost}`, {
    method: "GET",
  })
  const jsonData = await userInfo.json()
  console.log("jsonData", jsonData)
  userImg = jsonData.data.user.userProfilepic
  console.log("userImg", userImg)
  template += `
    <a href="./postDetail.html?postId=${posts[0]._id}" class="post_detail_id">
    <div class="ind_card border-card">
        <ul class="list-group list-group-flush ">
        <img src="${posts[0].postImage}" class="card-img-top" "alt="...">
        <li class="list-group-item user-p1" >
            <!--Individual post-->
            <div class="d-flex user-card-p1">
            <div class="flex-shrink-0 user-pic" id="user_info">
            <img src="${userImg}" alt="" srcset="">
                </div>
                <div class="flex-grow-1 ms-3 user-story-text-p1 lh-1">
                    <span class="story-username-p1"><small>${posts[0].postAuthor}</small></span><br>
                    <span class="story-postdate-p1"><small>${posts[0].postCreationDate}</small></span>
                </div>
            </div>
        </li>
        <li class="list-group-item story-text-p1">
            <div class="story-title-p1-1">${posts[0].postTitle}
            </div>
            <div class="fw-light story-reference-p1">`;
  tagsArray2.forEach((cv) => {
    template += `<a href="/search.html?searchTag=${cv}" class="post-tags">#${cv} </a>`;
  });
  template += `</div>
        </li>
        <li class="list-group-item">
            <div class="card-bottom-p1">
                <div class="bottom-left-p1">
                    <img src="/assets/images/heart.png" class="properties-icon-p1" alt=""
                        srcset=""> ${posts[0].postLikesCount} Reactions
                    <img src="/assets/images/coment.png" class="properties-icon-p1" alt=""
                        srcset=""> 0 Comments
                </div>
                <div class="bottom-right-p1">
                    <span class="story-read-time-p1">${posts[0].postTimeToRead} min read</span><button type="button"
                        class="btn-sm">Save</button>
                </div>
            </div>
        </li>
    </ul>
    </div></a></div>
    `;
  postsMainCards.innerHTML = template;
  // Remove the first element from all the arrays
  posts.shift();
  // Restart the template variable and insert the remaining post cards.
  template = "";
  for (post in posts) {
    let urlUserPost = `http://localhost:8080/users/${posts[post].postAuthorId}`
    console.log("urlUserPost", urlUserPost)
    const userInfo = await fetch(`${urlUserPost}`, {
    method: "GET",
  })
  const jsonData = await userInfo.json()
  console.log("jsonData", jsonData)
  userImg = jsonData.data.user.userProfilepic
  console.log("userImg", userImg)
    tagsArray = posts[post].postTags.join("\n");
    tagsArray2 = tagsArray.split("\n");
    template += `
        <a href="./postDetail.html?postId=${posts[post]._id}" class="post_detail_id2">
        <div class="ind_card my-2 border-card">
        <ul class="list-group list-group-flush">
        <li class="list-group-item user-p1">
        <!--Individual post-->
        <div class="d-flex user-card-p1">
        <div class="flex-shrink-0 user-pic" id="user_info">
        <img src="${userImg}" alt="" srcset="">
        </div>
        <div class="flex-grow-1 ms-3 user-story-text-p1 lh-1">
        <span class="story-username-p1"><small>${posts[post].postAuthor}</small></span><br>
        <span class="story-postdate-p1"><small>${posts[post].postCreationDate}</small></span>
        </div>
        </div>
        </li>
        <li class="list-group-item story-text-p1">
        <div class="story-title-p1">${posts[post].postTitle}
        </div>
        <div class="fw-light story-reference-p1">
        `;
    tagsArray2.forEach((cv) => {
      template += `<a href="/search.html?searchTag=${cv}" class="post-tags">#${cv} </a>`;
    });
    template += `
        </li>
        <li class="list-group-item">
        <div class="card-bottom-p1">
                <div class="bottom-left-p1">
                    <img src="/assets/images/heart.png" class="properties-icon-p1" alt="" srcset="">
                    ${posts[post].postLikesCount} Reactions
                    <img src="/assets/images/coment.png" class="properties-icon-p1" alt="" srcset=""> 0 Comments
                </div>
                <div class="bottom-right-p1">
                    <span class="story-read-time-p1">${posts[post].postTimeToRead} min read</span><button type="button"
                        class="btn-sm">Save</button>
                </div>
            </div>
        </li>
    </ul>
</div></a> `;
    postsMainCards2.innerHTML = template;
  }

  return;
};
// Define and store the input value on the 'Search' box
let input = document.querySelector(".input-text");
let findInput = document.querySelector("#find-input");
let searchText = "";
findInput.addEventListener("input", () => {
  searchText = findInput.value;
});

//When the search is done and the 'Enter' key is pressed, the search page is displayed with the results
let searchClick = document.querySelector(".input-search");
searchClick.addEventListener("search", () => {
  window.location.href = `/search.html?searchId=${searchText}`;
});

// Fetch the info from the db for both the Posts and the Users data, reverse the arrays and call the insertPost function.
fetch(urlPosts)
  .then((res) => {
    console.log("primera respuesta", res);
    return res.json();
  })
  .then((res) => {
    console.log("segunda respuesta", res.data.posts);
    let arr = res.data.posts;
    console.log("arrValues", arr);
    arr.reverse();
    console.log("arrInv", arr);
    insertPost(arr);
  })
  .catch((error) => {
    console.log(error);
  });

  if(urlUserProfile){
      fetch(urlUserProfile)
          .then((res) => {
            console.log("tercera respuesta", res)
            return res.json();
          })
          .then((res) => {
            console.log("cuarta respuesta", res)
            let arrUser = res.data.user;
            insUserProfile(arrUser);
          })
          .catch((error) => {
            console.log(error);
          });

  }
