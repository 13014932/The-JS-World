<script>
function jaiho()
{ 
  // var num= window.prompt();
  var num=[1,2,3,4,5,7];
  var num2=[2,8,12,23,6,7,4];
  var f=[];
  var s=[];
 var temp;
      
   for(var i=0; i< num.length ;i++){   
   		for(var j=0;j<num2.length;j++) {
   			if(num[i] != num2[j]){  
   				temp=true;
  				 }else{
                 temp=false;
                 break;
                 } 
   			}
            if(temp){
       f.push(num[i]);
    }
    }
   
   for(var i=0; i< num2.length ;i++){   
   		for(var j=0;j<num.length;j++) {
   			if(num2[i] != num[j]){  
   				temp=true;
  				 }else{
                 temp=false;
                 break;
                 } 
   			}
            if(temp){
       s.push(num2[i]);
    }
    }
    
   document.getElementById("demo").innerHTML=f+s;
}



</script>

OUTPUT :-    1,3,58,12,23,6
