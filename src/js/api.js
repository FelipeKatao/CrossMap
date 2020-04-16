function GET_METHOD(){
  fetch("http://127.0.0.1:5000/").then(response => 
    response.json().then(data => ({
        data: data,
        status: response.status,
    })
).then(res => {
    console.log(res.data)
    document.getElementById("localName").innerHTML=res.data[0].local+" | "+res.data[1].local+" | "+res.data[2].local
}));
}
function POST_METHOD(){
  //Criar o metodo de POST
}
GET_METHOD()