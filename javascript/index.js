let urlPosts = 'https://devto-photoapp-default-rtdb.firebaseio.com/posts.json';
let urlUsers = 'https://devto-photoapp-default-rtdb.firebaseio.com/users.json';

let postsMainCards = document.querySelector('#main_posts_cards');
const insertPost = (posts, userImg) => {
    let template = '';
    for (post in posts) {
        template += `
            <div class="ind_card">
        <ul class="list-group list-group-flush ">
        <img src="${posts[post].postImage}" class="card-img-top" "alt="...">
        <li class="list-group-item user-p1" >
            <!--Individual post-->
            <div class="d-flex user-card-p1">
            <div class="flex-shrink-0 user-pic" id="user_info">
            <img src="${userImg[post].userProfilepic}" alt="" srcset="">
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
                    <span class="story-read-time-p1">${posts[post].postTimeToRead}min read</span><button type="button"
                        class="btn btn-secondary btn-sm">Save</button>
                </div>
            </div>
        </li>
    </ul>
    </div>
    `
    };
    

    postsMainCards.innerHTML = template;
    return;
};

// const insertUserImg = (img) => {
//     let templateImg = '';
//     let imgHolder = document.querySelector('#user_info');
//     for (userProfilePic in img) {
        
//         console.log(img[userProfilePic].userProfilepic)
//         templateImg += `
//     <img src="${img[userProfilePic].userProfilepic}" alt="" srcset="">
//     `
//     };
//     imgHolder.innerHTML = templateImg;
//     return;

// };



function sortPost(a, b) {
    return Date.parse(new Date(a.postCreationDate)) - Date.parse(new Date(b.postCreationDate))
};

fetch(urlPosts)
    .then((res) => {
        return res.json()
    })
    .then((res) => {
        let arr = Object.values(res);
        fetch(urlUsers)
        .then((res) => {
            return res.json()
            
        })
        .then((res) => {
            let arrUser = Object.values(res);
            insertPost(arr, arrUser);
            })
            .catch((error) => {
                console.log(error)
            })
    })
    .catch((error) => {
        console.log(error)
    })

let infoUsers = [];

