<script>
function getFormvalue()
{
var a=[];
var x=document.getElementById("form1");
	for(var i=0; i<x.length ;i++){
    
    	
    	if(x.elements[i].value != "Submit"){
        	
       a.push(x.elements[i].value);
       
       document.getElementById("text").innerHTML=a;
            }
    
	}

}
</script>
