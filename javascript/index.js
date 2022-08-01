let url ='https://devto-photoapp-default-rtdb.firebaseio.com/posts.json';

let postsMainCards = document.querySelector('#main_posts_cards');
const insertPost = (posts) => {
    let template = '';
    for (post in posts){
        template += `
        <ul class="list-group list-group-flush">
        <li class="list-group-item user-p1">
            <!--Individual post-->
            <div class="d-flex user-card-p1">
                <div class="flex-shrink-0 user-pic">
                    <img src="/assets/images/9.jpg" alt="" srcset="">
                </div>
                <div class="flex-grow-1 ms-3 user-story-text-p1 lh-1">
                    <span class="story-username-p1"><small>${posts[post].postAuthor}</small></span><br>
                    <span class="story-postdate-p1"><small>${posts[post].postCreationDate}</small></span>
                </div>
            </div>
        </li>
        <li class="list-group-item story-text-p1">
            <div class="fw-bold story-title-p1">${posts[post].postTitle}
            </div>
            <div class="fw-light story-reference-p1">${posts[post].postTags}</div>
        </li>
        <li class="list-group-item">
            <div class="card-bottom-p1">
                <div class="bottom-left-p1">
                    <img src="/assets/images/heart.png" class="properties-icon-p1" alt=""
                        srcset=""> ${posts[post].postLikesCount}
                    <img src="/assets/images/coment.png" class="properties-icon-p1" alt=""
                        srcset=""> 0
                </div>
                <div class="bottom-right-p1">
                    <span class="story-read-time-p1">${posts[post].postTimeToRead}</span><button type="button"
                        class="btn btn-secondary btn-sm">Save</button>
                </div>
            </div>
        </li>
    </ul>
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