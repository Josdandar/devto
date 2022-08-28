
// Selectores
const button = document.querySelector("#login")
const userEmailInput = document.querySelector("#userEmail")
const passwordInput = document.querySelector("#password")

// Constants
const URL = "http://localhost:8080/auth"
// OnClick
button.addEventListener("click", async (event)  => {
  event.preventDefault()

  console.log("email :", userEmailInput.value)
  console.log("password :", passwordInput.value)

  const data = {
    email: userEmailInput.value,
    password: passwordInput.value
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
    alert("Ingresaste mal tus datos")
  } else {
    // Si estas autorizado
    // LocalStorage
    localStorage.setItem("token", jsonData.data.token)

    // Navegar
    window.location.href = "/index.html"
  }
})