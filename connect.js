const Connect = () => {
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id": 1,
  "name": "aanand",
  "phone_number": 7339418376,
  "photo_type": "pre-wedding",
  "location": "theni",
  "others": "none"
});

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
return fetch("localhost:6003/booking", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}