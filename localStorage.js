function storageName() {
    if (typeof (Storage) !== "undefined") {
        console.log(document.getElementById('name').value, document.getElementById('pass').value);

        localStorage.setItem("uname", document.getElementById('name').value);
        localStorage.setItem("passwd", document.getElementById('pass').value);
        console.log(document.getElementById("name").value, document.getElementById('pass').value);
        
        document.getElementById("status").innerHTML ="Your login information: " + localStorage.getItem("uname") 
        + "  " + localStorage.getItem("passwd");
    }
    else {
        document.getElementById("status").innerHTML = "Your browser doesn't seem to support local storage.";
    }
}
    
   document.addEventListener("DOMContentLoaded", function(){
       document.getElementById("buttonColor").onclick = function(){
            var colorArray = [];
            colorArray.push(document.getElementById("color").value);
            colorArray.push(document.getElementById("color2").value);
            colorArray.push(document.getElementById("color3").value);
            colorArray.push(document.getElementById("color4").value);
            console.log(document.getElementById("color").value,document.getElementById("color2").value,document.getElementById("color3").value,document.getElementById("color4").value);
            var cArray = JSON.stringify(colorArray);
            console.log(cArray);
            if (typeof (Storage) !== "undefined") {
            localStorage.setItem("colorArray", cArray);
            }
            else {
                document.getElementById("status3").innerHTML = "I am sorry your browser doesn't support local storage.";
             }
        };
        
   });
   document.addEventListener("DOMContentLoaded", function(){
       document.getElementById("showColor").onclick = function(){
            if (typeof (Storage) !== "undefined") {
                var color = localStorage.getItem("colorArray");
                var c = JSON.parse(color);
                var indexNumber = parseInt(document.getElementById("arraySelect").value);
                console.log(c);
                document.getElementById("status3").innerHTML = "("+c[indexNumber]+")";
            }
            else {
                document.getElementById("status3").innerHTML ="I am sorry your browser doesn't support local storage.";
            }
        };
  
   });
   document.addEventListener("DOMContentLoaded", function(){
       document.getElementById("assocArray").onclick =function(){
           var assocArray = {
               "name": document.getElementById("fname").value,
               "lastName": document.getElementById("lastname").value,
               "eyeColor": document.getElementById("eyeColor").value,
               "age": document.getElementById("age").value,

            };
           var p = JSON.stringify(assocArray);
           console.log(p);
           if (typeof (Storage) !== "undefined") {
           localStorage.setItem("personInfo", p);
           showArray();
           }
        else {
            document.getElementById("status3").innerHTML ="I am sorry your browser doesn't support local storage.";
         }
         showArray();
        };
        
   });
   function showArray() {
    if (typeof (Storage) !== "undefined") {
        var  person = localStorage.getItem("personInfo");
        var assocPerson = JSON.parse(person);
        console.log(person);
        console.log(assocPerson.name);
        document.getElementById("status4").innerHTML = "First Name: " + assocPerson.name +"<br>" + "Last Name: " 
        + assocPerson.lastName + "<br>" + "Eye Color: " + assocPerson.eyeColor 
        + "<br>" + "Age: " + assocPerson.age;
    }
    else {
        document.getElementById("status4").innerHTML = "I am sorry your browser doesn't support local storage.";
     }
   }
    