const requestGetPosts = (url) => {
    const httpRequest = new XMLHttpRequest();
    let result = [];
    httpRequest.onload = (data) => {
        result = JSON.parse(data.target.responseText);
        // console.log(result)
    };

    httpRequest.open("GET", url, false);
    httpRequest.send();
    return result;
};
const infoPost = requestGetPosts("https://devto-photoapp-default-rtdb.firebaseio.com/posts.json");
const posts = Object.values(infoPost);
console.log(infoPost);
console.log(posts);
let cardBody = document.querySelector("#card_holder");
let cardInfo = posts.reduce((ac,cv, i)=>{

    ac += `<div class="card p-3 m-2" id="card_resume">
    <div class="d-flex" style="height: 3rem;">
        <div>
            <img src="${cv.postImage}" class="rounded-circle me-1" alt="Userpic" style="height:40px; width:40px">
        </div>
        <div class="ps-2">
            <span>${cv.postAuthor}</span><br>
            <span>${cv.postCreationDate}</span>
        </div>

    </div>
    <div class="card-body ps-5">
      <h5 class="card-title">${cv.postTitle}</h5>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
    <div class="d-flex justify-content-between ps-5" style="height: 3rem;">
        <div class="text-center align-middle pt-2">
            <button>${cv.postLikesCount+cv.postSavedCount+cv.postUnicornCount} reaction</button>
            <button>5 comments</button>
            
        </div>
        <div class=" text-center align-middle pt-2">
            <span>1 min read</span>
            <button>Save</button>
        </div>

    </div>
  </div>
`
    return ac;
    },"");

cardBody.innerHTML = cardInfo;
















