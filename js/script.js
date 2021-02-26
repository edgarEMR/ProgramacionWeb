/*const PI = 3.1416;

console.log(PI);

const car = {tipo: "Toyota", modelo: "2018", color: "negro"};

car.color = "blanco";

car.dueno = "Edgar";

console.log(car);
*/

/*let i = 5;
for(let i = 0; i<10; i++){

}

console.log(i);
*/
/*
var y;
function ejemplo(){
    y = 100 * 20;
    var z = 10;
    console.log("z: " + z);
}

ejemplo();

y = 1;

console.log("y: " + y);

var x = 0;

function a(){
    var y = 2;

    console.log(x,y);

    function b(){
        x = 3;
        y = 4;
        z = 5;
    }

    b();

    console.log(x,y,z);
}

a();

console.log(x,z);
*/


function cargarFile() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("texto").innerHTML = this.responseText;
        }
    }

    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
}