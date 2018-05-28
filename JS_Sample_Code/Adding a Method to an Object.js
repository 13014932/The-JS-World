<script>
var car = {name:"Satpal", lname:"Khatana", fullname:function(){ return this.name+" "+this.lname}};


document.getElementById("demo").innerHTML = car.fullname();
</script>

Output:- Satpal Khatana
