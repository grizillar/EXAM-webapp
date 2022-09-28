document.getElementById("login-submit").addEventListener("click", function(event){
    event.preventDefault()
});

async function login(username, password){
    console.log(`fn is running with ${username.value} and ${password.value}`);
    const api_url = "http://44.211.158.138:8080/checkUser";
    const res = await postapi(api_url, {
        username: username.value,
        password: password.value
    });
    console.log(res);
    if(res.founduser == 0){
        alert('No user found.')
    }
    if(res.founduser == 1){
        window.location.replace("upload.html")
    }
}

async function getapi(url) {
    const response = await fetch(url);  
    var data = await response.json();

    return data.data
}

async function postapi(url, data) {
    console.log(JSON.stringify(data))
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });  
    var res = await response.json();

    return res
}