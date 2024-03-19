const url = "http://localhost:5500/api"

user={
    name: "nominatim",
    avatar: "http://lorempixel.com.br/500/400/?1",
    city: "London"
}

upUser={
    name: "Phillip Hernandez",
    avatar: "http://lorempixel.com.br/500/400/?1",
    city: "Fusovoj"
}

function getUser(){
    axios.get(url)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data.users)
    })
    .catch(error => console.log(error))
}

getUser()

function addNewUser(user){
    axios.post(url, {
        name: user.name,
        avatar: user.avatar,
        city: user.city
    })
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

document.getElementById('newUser').addEventListener('click', ()=>addNewUser(user))

function updateUser(User){
    axios.put(`${url}/3`, User)
    .then(response => {
        alert(response.data)
    })
    .catch(error => console.log(error))
}

document.getElementById('updateUser').addEventListener('click', ()=>updateUser(upUser))

function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then(response => {
        alert(response.data)
    })
    .catch(error => console.log(error))
}

document.getElementById('deleteUser').addEventListener('click', ()=>deleteUser(3))