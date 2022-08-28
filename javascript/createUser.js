
// Selectores
const button = document.querySelector("#createUser")
const userEmailInput = document.querySelector("#userEmail")
const userNicknameInput = document.querySelector("#userNickname")
const userLastnameInput = document.querySelector("#userLastname")
const userNameInput = document.querySelector("#userName")
const passwordInput = document.querySelector("#password")

// Constants
const URL = "http://localhost:8080/users"
// OnClick
button.addEventListener("click", async (event)  => {
  event.preventDefault()
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
  console.log("jsonData : ", jsonData)

  // No fue exitoso, no estas autorizado
  if(!jsonData.success) {
    alert(jsonData.message)
  } else {
    // Navegar
    window.location.href = "/login.html"
  }
})