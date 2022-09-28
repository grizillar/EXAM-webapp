const api_url = "http://localhost:8080/";

async function getapi(url) {
  const response = await fetch(url);

  
  var data = await response.json();
  if (response) {
    hideloader();
  }
  show(data);
}

getapi(api_url);

function hideloader() {
  document.getElementById("loading").style.display = "none";
}

function show(data) {
  console.log(data.data);
  var temp = `username:${data.data[0].username}, password:${data.data[0].password}`;
  
  document.getElementById("data").innerHTML = temp;
}

// fetch("/", {
//   "method" : "GET",
// }).then(
//   res => {
//     console.log(res);
//     res.json().then(
//       data => {
//         console.log(data);
//         var temp = "";
//         if (data.length > 0) {
//           for (let i = 0; i < data.length; i++){
//             temp += "<tr>";
//             temp += "<td>" + data.data[i].username + "</td>";
//             temp += "<td>" + data.data[i].password + "</td>";
//             temp += "</tr>";
//           }
//         }

//         document.getElementById("data").innerHTML += temp;
//       }
//     )
//   }
// )
