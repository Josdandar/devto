let url ="https://devto-challenge-backend.vercel.app/posts/";

let params = new URLSearchParams(window.location.search)
let html = document.querySelector("link[rel='import']").import;

const insertFilteredPost = (posts) => {
    let search = params.get('searchId')

let searchBtnHolder = document.querySelector('#btn_left_aside');
let searchTitleHolder = document.querySelector('#search_title_holder');
let strToFilter= search
searchBtnHolder.innerHTML =`<a href="https://devto-mu.vercel.app/search.html?searchId=${search}" class="btn active" i aria-current="page">Posts</a>
<a href="#" class="btn">Podcasts</a>
<a href="#" class="btn">People</a>
<a href="/search.html?searchTag=${search}" class="btn">Tags</a>
<a href="#" class="btn">Comments</a>
<a href="#" class="btn">My posts only</a>`
searchTitleHolder.innerHTML =`<b>Search results for ${strToFilter}</b>`;

let strLower = strToFilter.toLowerCase()

let postsMainCards = document.querySelector('#card_holder');
    let template = '';

    for (post in posts){
        let tagstring = posts[post].postTags.toString();


        if(posts[post].postTitle.toLowerCase().match(strLower) ||
        posts[post].postAuthor.toLowerCase().match(strLower)
         || tagstring.toLowerCase().match(strLower)) {

            
             let tagstemplate=``;
             posts[post].postTags.forEach(cv => {
                
                 tagstemplate+=`<a href="https://devto-mu.vercel.app/search.html?searchTag=${cv}" class="card-link" style="text-decoration: none;">
                 <button type="button" class="btn btn-sm" id=transparent_btn>#${cv}</button>
                 </a>`
                
             });

           
                

        
        template += `<div class="card p-3 m-2" id="card-resume">
        <div class="d-flex" style="height: 3rem;">
            <div>
                <img src="${posts[post].postImage}" class="rounded-circle me-1" alt="Userpic" style="height:40px; width:40px">
            </div>
            <div class="ps-2">
                <span>${posts[post].postAuthor}</span><br>
                <span>${posts[post].postCreationDate}</span>
            </div>
    
        </div>
        <div class="card-body ps-5">
          <h5 class="card-title">${posts[post].postTitle}</h5>
           ${tagstemplate}
        </div>
        <div class="d-flex justify-content-between ps-5" style="height: 3rem;">
            <div class="text-center align-middle pt-2">
                <button type="button" class="btn btn-light">${posts[post].postLikesCount+posts[post].postSavedCount+posts[post].postUnicornCount} reactions</button>
                <button type="button" class="btn btn-light">0 comments</button>
                
            </div>
            <div class=" text-center align-middle pt-2">
                <span>1 min read</span>
                <button type="button" class="btn btn-light">Save</button>
            </div>
    
        </div>
      </div>
    `
    }};

    postsMainCards.innerHTML = template;
    return;
}

const insertFilteredTag = (posts) => {
    let search = params.get('searchTag')

let searchBtnHolder = document.querySelector('#btn_left_aside');
let searchTitleHolder = document.querySelector('#search_title_holder');
let strToFilter= search
searchBtnHolder.innerHTML =`<a href="https://devto-mu.vercel.app/search.html?searchId=${search}" class="btn" i aria-current="page">Posts</a>
<a href="#" class="btn">Podcasts</a>
<a href="#" class="btn">People</a>
<a href="/search.html?searchTag=${search}" class="btn active">Tags</a>
<a href="#" class="btn">Comments</a>
<a href="#" class="btn">My posts only</a>`
searchTitleHolder.innerHTML =`<b>Searsch results for ${search}</b>`;

let strLower = strToFilter.toLowerCase()
let postsMainCards = document.querySelector('#card_holder');
    let template = '';
    for (post in posts){
        let tagstring = posts[post].postTags.toString();
        if(tagstring.toLowerCase().match(strLower)) {
            
            
            let tagstemplate=``;
            posts[post].postTags.forEach(cv => {
                
                tagstemplate+=`<a href="https://devto-mu.vercel.app/search.html?searchTag=${cv}" class="card-link" style="text-decoration: none;">
                <button type="button" class="btn btn-sm" id=transparent_btn>#${cv}</button>
                </a>`
                
            });
           
                

        
        template += `<div class="card p-3 m-2" id="card-resume">
        <div class="d-flex" style="height: 3rem;">
            <div>
                <img src="${posts[post].postImage}" class="rounded-circle me-1" alt="Userpic" style="height:40px; width:40px">
            </div>
            <div class="ps-2">
                <span>${posts[post].postAuthor}</span><br>
                <span>${posts[post].postCreationDate}</span>
            </div>
    
        </div>
        <div class="card-body ps-5">
          <h5 class="card-title">${posts[post].postTitle}</h5>
          ${tagstemplate}
        </div>
        <div class="d-flex justify-content-between ps-5" style="height: 3rem;">
            <div class="text-center align-middle pt-2">
                <button type="button" class="btn btn-light">${posts[post].postLikesCount+posts[post].postSavedCount+posts[post].postUnicornCount} reaction</button>
                <button type="button" class="btn btn-light">0 comments</button>
                
            </div>
            <div class=" text-center align-middle pt-2">
                <span>1 min read</span>
                <button type="button" class="btn btn-light">Save</button>
            </div>
    
        </div>
      </div>
    `
    }};

    postsMainCards.innerHTML = template;
    return;
}

const insertFilteredUser = (posts) => {
    let search = params.get('searchUser')

let searchBtnHolder = document.querySelector('#btn_left_aside');
let searchTitleHolder = document.querySelector('#search_title_holder');
let strToFilter= search
searchBtnHolder.innerHTML =`<a href="#" class="btn" i aria-current="page">Posts</a>
<a href="#" class="btn">Podcasts</a>
<a href="#" class="btn active">People</a>
<a href="#" class="btn">Tags</a>
<a href="#" class="btn">Comments</a>
<a href="#" class="btn">My posts only</a>`
searchTitleHolder.innerHTML =`<b>Searsch results for ${strToFilter}</b>`;

let strLower = strToFilter.toLowerCase()
let postsMainCards = document.querySelector('#card_holder');
    let template = '';
    for (post in posts){
        if(posts[post].postAuthor.toLowerCase().match(strLower)) {
       
            

                

        
        template += `<div class="card p-3 m-2" id="card-resume">
        <div class="d-flex" style="height: 3rem;">
            <div>
                <img src="${posts[post].postImage}" class="rounded-circle me-1" alt="Userpic" style="height:40px; width:40px">
            </div>
            <div class="ps-2">
                <span>${posts[post].postAuthor}</span><br>
                <span>${posts[post].postCreationDate}</span>
            </div>
    
        </div>
        <div class="card-body ps-5">
          <h5 class="card-title">${posts[post].postTitle}</h5>

        </div>
        <div class="d-flex justify-content-between ps-5" style="height: 3rem;">
            <div class="text-center align-middle pt-2">
                <button type="button" class="btn btn-light">${posts[post].postLikesCount+posts[post].postSavedCount+posts[post].postUnicornCount} reaction</button>
                <button type="button" class="btn btn-light">0 comments</button>
                
            </div>
            <div class=" text-center align-middle pt-2">
                <span>1 min read</span>
                <button type="button" class="btn btn-light">Save</button>
            </div>
    
        </div>
      </div>
    `
    }};

    postsMainCards.innerHTML = template;
    return;
}

fetch(url)
    .then((res) => {
        return res.json()
    })
    .then((res) => {
        resAfter = res.data.posts
        if (params.has("searchTag")) {

            insertFilteredTag(resAfter);
        }
        else if (params.has("searchUser")) {
            insertFilteredUser(resAfter);
        }
        else
            insertFilteredPost(resAfter);

        
    })
    .catch((error) => {
        console.log(error)
    })



      
