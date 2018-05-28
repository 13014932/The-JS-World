<script>
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    
}

function pbox()
{
var a=document.getElementById("textbox1").value;
var b=document.getElementById("textbox2").value;
var c=document.getElementById("textbox3").value;
var myFather = new Person(a, b, c, "blue");
var myMother = new Person(a, b, c, "green");

alert(myFather.firstName+"\n"+myFather.lastName+”\n”+myFather.age);
alert (myMother.firstName+"\n"+myMother.lastName+"\n"+myMother.age);
}
</script>
<button onclick="pbox()">click</button>
