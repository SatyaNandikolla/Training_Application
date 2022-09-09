// npm i axios

const axios = require('axios');

axios.get('http://jsonplaceholder.typicode.com/users', { params: { id: 2 } })
.then((response) => {
	console.log(response.data);
})
.catch((error) => {
	console.log(error);
});

axios.post('http://jsonplaceholder.typicode.com/users', { params: { name: "test user" } })
.then((response) => {
	console.log(response.data);
})
.catch((error) => {
	console.log(error);
});
