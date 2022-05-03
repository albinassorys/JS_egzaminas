/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.getElementById("btn").addEventListener("click", ()=> 

{

    fetch(ENDPOINT)

    .then (resp => resp.json())
    .then (data => {
        
        let output = "";

        data.forEach((item) => {

            output += `<div><img src="${item.avatar_url}">
            <h3>${item.login}</h3><br>`
                  
        });    
        
        document.getElementById("output").innerHTML = output;
    
    })
    
    .catch(err => console.log("nepavyko",err));

})
