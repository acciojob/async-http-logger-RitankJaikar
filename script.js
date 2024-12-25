//your JS code here. If required.
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((res) => {
	return res.json()
})
.then((data) => {
	console.log(data);
})
.catch((err) => {
	console.log(err);
})