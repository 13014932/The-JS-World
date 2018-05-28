<script>

function  circle(radius){
 this.radius=radius;
  this.parameter=function(){
return this.radius*(2*3.14); 
 };  
  this.area=function(){
return this.radius*this.radius*3.14; 
 }; 
 } 
function cal(){ 
var a=document.getElementById("textbox1").value;
 var c=new circle(a);
 alert("Parameter of Cirle\n"+c.parameter());
 alert("Area of Circle\n"+c.area());
 }
</script>
