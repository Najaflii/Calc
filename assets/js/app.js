
function Show() {
    var value = parseInt(document.getElementById("num").value);
    var x = value;
    var value = parseInt(document.getElementById("per").value);
    var y = value;
    var value = parseInt(document.getElementById("dur").value);
    var z = value;
    var count = 0;
    var text = document.getElementById("msg")

   if (y*=x) {
       y/=100
       y+=x
       y/=z
    text.innerHTML = ` Per month ${Math.floor(y)} AZN `
   }
  
    
}
