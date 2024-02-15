
const Create = async(formData) => {
 var myHeaders = new Headers();
 myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id": formData.id,
  "name": formData.name,
  "phone_number": formData.phoneNumber,
  "photo_type": formData.photoType,
  "location": formData.location,
  "others": formData.other
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

let res = await fetch("http://localhost:6003/booking/add", requestOptions)
return res.status
}

export default Create;