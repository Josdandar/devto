const createPost = (post) => {
    let hRequest = new XMLHttpRequest()

    hRequest.open("POST",'https://devto-20-default-rtdb.firebaseio.com//posts.json', false);
    hRequest.send(JSON.stringify(post));
    return console.log(post.postTitle + 'created')
}


const otherPost = {
    postImage: "www.nisdni.com",
    postTitle: "title123",
    postTags: ["0","1","2","3"],
    postContent: "Content"
}
createPost(otherPost)

