<script>
function removecolor()
{
	
    var x;
    var a=[];
		 x=document.getElementById("colorSelect");
         var l=document.getElementById("colorSelect").length;
        for (var i=0;i<l;i++){
        
        a.push(x.options[i].text);
         document.getElementById("test").innerHTML=a;
        }
           

}
</script>
