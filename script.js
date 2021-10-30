function displayTime(){
var date = new Date();
var h = date.getHours(); // 0 - 23
var m = date.getMinutes(); // 0 - 59
var s = date.getSeconds(); // 0 - 59
var session = "AM";


if(h>=12){
    if(m>0){
        
        session="PM";
    }
   if(h>12) {
       h=h-12;
   }
  
   
}

if(h<10){
    h="0"+h;
}
if(s<10){
    s="0"+s;
}
if(m<10){
    m="0"+m;
}



var digitalTime=h + ":" + m +":" + s + " " + session;

document.getElementById("digitalClock").innerHTML = digitalTime;


setTimeout(displayTime, 1000);

}
displayTime();


