<script>
function myFunction() {
    var num =[2,8,12,23,6,7,4];
    var a=[];
    var b=[];
    var temp=[];
    var temp2;
    var del=12;
    var del2=7;
    
    for(var i=0;i<num.length;i++){
    
    	if(num[i] == del ){ 
    		temp.push(num[i]);
                		}
    	if(num[i] == del2){
       		 temp.push(num[i]);
        	}
    }
    for(var i=0; i< num.length ;i++){   
   		for(var j=0;j<temp.length;j++) {
   			if(num[i] != temp[j]){  
   				temp2=true;
  				 }else{
                 temp2=false;
                 break;
                 } 
   			}
            if(temp2){
       a.push(num[i]);
    }
    }
    
    document.getElementById("demo").innerHTML=a;
}
