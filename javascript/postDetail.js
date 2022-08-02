let posturl ='https://devto-photoapp-default-rtdb.firebaseio.com/posts/-N8RJPxsdXMuHVLLs-30.json';
let userurl ='https://devto-photoapp-default-rtdb.firebaseio.com/users/-N8RJPww_niZjLYxXLB2.json';




let postsDetailMain = document.querySelector('#post-holder');
    const insertPost = (posts) => {
     template = '';         
     

     postsDetailMain.innerHTML = template;
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
         </div>`;         
         
    
         AuthorDetailMain.innerHTML = template;
         return; }


fetch(posturl)
    .then((res) => {
        return res.json()
    })
    .then((res) => {
         console.log(res.postAuthor)
        insertPost(res);
    })
    .catch((error) => {
        console.log(error)
    })

fetch(userurl)
    .then((res) => {
        return res.json()
    })
    .then((res) => {
         console.log(res.userEmail)
        insertUser(res);
    })
    .catch((error) => {
        console.log(error)
    })

    