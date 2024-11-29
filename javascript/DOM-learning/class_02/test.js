function loadApiData() {
    fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => displayData(data))
}
function displayData(data) {
     const div =document.getElementById('apiData');

     data.map(user =>
          {
            const p= document.createElement('p');
            p.innerText= user.email;
            div.appendChild(p);
          }


     )
    
}

