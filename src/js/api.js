function GET_METHOD(){
  fetch("http://127.0.0.1:5000/path").then(response => 
    response.json().then(data => ({
        data: data,
        status: response.status,
        cors:"no-cors"
    })
).then(res => {
    console.log(res.data)
}));
}
function POST_METHOD(){
  //Criar o metodo de POST
}
GET_METHOD()