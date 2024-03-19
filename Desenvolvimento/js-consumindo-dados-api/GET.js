var cat = new XMLHttpRequest();
cat.open("GET", "https://meowfacts.herokuapp.com/", false)
cat.send();

console.log(JSON.parse(cat.response).data[0])