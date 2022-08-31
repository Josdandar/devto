// Navbar
let html = document.querySelector("link[rel='import']").import;
// Selectores
const button = document.querySelector("#createUser")
const userEmailInput = document.querySelector("#userEmail")
const userNicknameInput = document.querySelector("#userNickname")
const userLastnameInput = document.querySelector("#userLastname")
const userNameInput = document.querySelector("#userName")
const passwordInput = document.querySelector("#password")

function isEmailValid(email) {
  const emailRegexp = new RegExp(
    /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
  )
  return emailRegexp.test(email)
}

// Constants
const URL = "https://devto-challenge-backend.vercel.app/users"
// OnClick
button.addEventListener("click", async (event)  => {
  event.preventDefault()

  const emptyDataCheck= [ 
    userEmailInput.value,
    passwordInput.value,
    userNameInput.value,
    userLastnameInput.value,
    userNicknameInput.value,
  ]
 
  if(emptyDataCheck.includes("")){
    alert("You have empty values") 
  }
  else{
  if(!isEmailValid(userEmailInput.value)){
    alert("Your email has an invalid format")
  }
  else{

    const data = {
      userEmail: userEmailInput.value,
      password: passwordInput.value,
      userName: userNameInput.value,
      userLastname: userLastnameInput.value,
      userNickname: userNicknameInput.value,
    }
  

  // Fetch
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
    alert("User Succesfully created")
    window.location.href = "/login.html"
  }
}
  }
})