var quill = new Quill('#editor', {
    theme: 'snow',
    placeholder:'Write your post content here....\n'
  });

const token = localStorage.getItem("token") || ""
const payload = token.split(".")[1]
const id = JSON.parse(atob(payload)).id
let urlPostImg = document.querySelector('#url_post_img')
let saveImgUrl = document.querySelector('#save_img_url')
let postTitle = document.querySelector('#input_post_title')
let postBody = document.querySelector('#editor')
let publishBtn = document.querySelector("#save_btn")

const URL = "https://devto-challenge-backend.vercel.app/posts"
var input = document.querySelector('input[name=tags]'),
tagify = new Tagify( input );

  publishBtn.addEventListener('click', async (event) => {
    event.preventDefault()
    postTags=[],
    JSON.parse((input.value)).forEach(cv => {
     postTags.push(cv.value)
      });

    const data ={
    postAuthor :id,
    postImage : urlPostImg.value,
    postTitle : postTitle.value,
    postBody :quill.root.innerHTML,
    postTimeToRead : Math.ceil(quill.getText().length/1500),
    postTags:postTags
  }

  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  const jsonData = await response.json()

  // No fue exitoso, no estas autorizado
  if(!jsonData.success) {
    alert(jsonData.message)
  } else {
    // Navegar
    alert("Post Succesfully created")
    window.location.href = "/index.html"
    
  }


  
})










