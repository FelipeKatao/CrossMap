
var targetData
function  GET_METHOD(){
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => 
        response.json().then(data => ({
            data: data,
            status: response.status
        })
    ).then(res => {
        console.log(res.status, res.data.title)
        document.getElementById('divTitle').innerHTML =res.data.title
    }));
    targetData="as promisses são resolvidas dentro delas mesmo"
}

//window.addEventListener("load",GET_METHOD);
console.log(GET_METHOD())
console.log(targetData)
