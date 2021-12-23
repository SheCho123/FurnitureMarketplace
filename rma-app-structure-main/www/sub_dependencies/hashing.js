const sub_filePath="/jasons/users.json"
var dataOfJason;

FileLoader.load_file(sub_filePath, 
    (data) => {
        dataOfJason = JSON.parse(data);
    },
    (err) => {
        console.log(`Error loading users at FileLoader: ${err}`);
    });

/*
let dataParsed = null
import fs from 'fs';
var dataTesta = fs.readFileSync('test.json');
var words = JSON.parse(dataTesta);
*/
function startHashing() {
    var userName=document.getElementById('inputUsername').value;
    var eMail = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;
    var hashedPassword = "";

    for(let i = 0; i < password.length; i++)
        hashedPassword+=password[i]+i;
    
    console.log(hashedPassword)
        //IMPORTING HERE NEEDED
}