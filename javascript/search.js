let url ='https://devto-photoapp-default-rtdb.firebaseio.com/posts.json';

let postsMainCards = document.querySelector('#card_holder');
const insertPost = (posts) => {
    let template = '';
    for (post in posts){
        template += `<div class="card p-3 m-2" id="card_resume">
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
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
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
    };
    console.log(template)
    postsMainCards.innerHTML = template;
    return;
}
fetch(url)
    .then((res) => {
        return res.json()
    })
    .then((res) => {
        insertPost(res);
    })
    .catch((error) => {
        console.log(error)
    })


