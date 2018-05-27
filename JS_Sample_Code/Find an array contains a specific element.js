<script>
function myFunction() {
    var num =[2,8,12,23,6,7,4];
    var num2=[1,5,9,3,11];
    var temp;

    var del=1;
   
    
    for(var i=0;i<num.length;i++){
    
    	if(num[i] == del ){
        	temp=true+" item found in array1";
            }
    }
    for(var j=0; j<num2.length;j++){
    	
        if(num2[j] == del){
        temp="item found in array2";
        		}
    }
    document.getElementById("demo").innerHTML=temp;
}
</script>
