<script>
function insert_Row(){
		
        var rowCount = document.getElementById('sampleTable').rows.length;
         
       var x=document.getElementById("sampleTable").insertRow(rowCount);
        
        var msg=document.getElementById("text1").value;
        
        x.insertCell().innerHTML="<input type='checkbox'>";
        x.insertCell().innerHTML=msg;
	
}
function test()
{
//rn = window.prompt("Input the Row number");
//cn = window.prompt("Input the Column number");
//content = window.prompt("Input the Cell content");  
var x=document.getElementById('sampleTable').rows[1].cells[1].innerHTML;
alert(x);

}

</script>
