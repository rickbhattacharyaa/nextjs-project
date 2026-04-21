export function setUser(user){
    localStorage.setItem("users", JSON.stringify(user))
}

export function getUser(user){
   return JSON.parse(localStorage.getItem("users")) || []
}