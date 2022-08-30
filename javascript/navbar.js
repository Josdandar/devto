let urlUserProfile = "";
const tokenNav = localStorage.getItem("token") || "";
if (tokenNav) {
  const payload = tokenNav.split(".")[1];
  const userId = JSON.parse(atob(payload)).id;
  urlUserProfile = `http://localhost:8080/users/${userId}`;
}

let validate = localStorage.getItem("token");


const insertNav = async (validate) => {
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
          <div class="nav-button">
          <button type="button" class="btn btn-outline-primary button-register">Create Account</button>
          </div>
          
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
      window.location.href = `/login.html`;
    });
    let registerBtn = document.querySelector(".button-register");
    registerBtn.addEventListener("click", () => {
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
    const instuserProfileFetch = await fetch(urlUserProfile, {
      method: "GET",
    });
    const jsonDataUser = await instuserProfileFetch.json();
    usrProfile = jsonDataUser.data;

    let userProfile = document.querySelector("#dropdown-user");
    // Load user Profile data
    const insUserProfile = (user) => {
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
            <li><a class="dropdown-item" id="signOut" href="/index.html">Sign Out</a></li>
        </ul>
        <style>
            .dropdown-toggle::after {
                content: none;
                                    }
        </style>
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"
            role="button" aria-expanded="false"><img src=${user.userProfilePic} alt="" srcset=""
                class="profile"></a>
    
                </div>
                `;
      userProfile.innerHTML = templateUser;
    };
    insUserProfile(usrProfile);
    // 'Sign Out'
    let signOut = document.querySelector("#signOut");
    signOut.addEventListener("click", () => {
        alert("El evento se disparo")
      window.localStorage.removeItem("token");
      window.location.reload(true);
    
  });
  }
};

insertNav(validate);

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

