let url ='https://devto-photoapp-default-rtdb.firebaseio.com/posts.json';

let searchTitleHolder = document.querySelector('#search_title_holder');
let strToFilter= "phone"
searchTitleHolder.innerHTML =`<b>Search results for ${strToFilter}</b>`;

let strLower = strToFilter.toLowerCase()
let postsMainCards = document.querySelector('#card_holder');
const insertFilteredPost = (posts) => {
    let template = '';
    for (post in posts){
        if(posts[post].postTitle.toLocaleLowerCase().match(strLower) ||
        posts[post].postAuthor.toLocaleLowerCase().match(strLower)||
        posts[post].postTags.toLocaleLowerCase().match(strLower)) {
            let tagsArray = posts[post].postTags.split(" ");
            console.log(tagsArray)
            let tagstemplate=``;
            tagsArray.forEach(cv => {
                console.log(cv)
                tagstemplate+=`<a href="#" class="card-link">#${cv}</a>`
                
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
                <button>${posts[post].postLikesCount+posts[post].postSavedCount+posts[post].postUnicornCount} reaction</button>
                <button>5 comments</button>
                
            </div>
            <div class=" text-center align-middle pt-2">
                <span>1 min read</span>
                <button>Save</button>
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
        insertFilteredPost(res);
    })
    .catch((error) => {
        console.log(error)
    })



      
