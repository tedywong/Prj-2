var Alert=new CustomAlert();
  
function CustomAlert(){
  this.render = function(dialog) {
    var WinW = window.innerWidth;
    var WinH = window.innerHeight;
    var dialogoverlay = document.getElementById('dialogoverlay');
    var dialogbox = document.getElementById('dialogbox');
    dialogoverlay.style.display = "block";       // showing instead of opague
    dialogoverlay.style.height = WinH+"px";
    dialogbox.style.left = (WinW/2) - (300 * .5)+"px";
    dialogbox.style.top = "100px";
    dialogbox.style.display = "block";   // showing instead of opague
    document.getElementById('dialogboxhead').innerHTML = "You clicked";
    document.getElementById('dialogboxbody').innerHTML = dialog;
    document.getElementById('dialogboxfoot').innerHTML = '<button onclick = "Alert.ok()">OK</button>';
  }
  this.ok = function() {
    document.getElementById('dialogbox').style.display = "none";
    document.getElementById('dialogoverlay').style.display = "none";
  }
}  

