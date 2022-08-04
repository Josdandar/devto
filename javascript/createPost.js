// const createPost = (post) => {
//     let hRequest = new XMLHttpRequest()

//     hRequest.open("POST",'https://devto-photoapp-default-rtdb.firebaseio.com/posts.json', false);
//     hRequest.send(JSON.stringify(post));
//     return post.postTitle + 'created'
// }


// const otherPost = {
//     postAuthor: "",
//     postBody: "",
//     postChangeDate: "",
//     postCreationDate: "",
//     postImage: "",
//     postLikesCount: "",
//     postSavedCount: "",
//     postTags: ['','',''],
//     postTimeToRead: "",
//     postTitle: "",
//     postUnicornCount: ""
// }
// createPost(otherPost)
let url = 'https://devto-photoapp-default-rtdb.firebaseio.com/posts/-N8aSLdfN2USPdpmBpAx.json';


const deletePost = (url) => {
    const httpRequest = new XMLHttpRequest();
    console.log(httpRequest)
    httpRequest.onload = (e) => {
    }

    httpRequest.open("DELETE", url, false);
    httpRequest.send();

}
deletePost(url);