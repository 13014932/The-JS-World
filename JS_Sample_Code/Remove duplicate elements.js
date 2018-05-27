<script>
function jaiho() {
    var num=[1,2,3];
	var num2=[2,30,1];
    
    var f=[];
 	 var s=[];
     var t=[];
     var temp;
  
     for(var i=0;i<num.length;i++){
     
    	for(var j=0;j<num2.length;j++){
        if(num[i] == num2[j]){
        	f.push(num[i]);
            
        	}
            
        
        }
    
    }
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
       t.push(num[i]);
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
   document.getElementById("demo").innerHTML=f+","+t+","+s; 
    
}

OUTPUT:-  1,2,3,30
