<script>

var library = [ 
   {
       title: 'Bill Gates',
       author: 'The Road Ahead',
       libraryID: 1254
   },
   {
       title: 'Steve Jobs',
       author: 'Walter Isaacson',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];
   
function compareIt(obj,obj2){
return (obj.libraryID>obj2.libraryID) ? 1 : -1;
}

function sorting(array){
for(var i=0;i<array.length;i++){
if(i==array.length-1){
break;
}
if(compareIt(array[i],array[i+1])==1){
var temp=array[i];
array[i]=array[i+1];
array[i+1]=temp;
}
}
return array;
}
document.getElementById("demo").innerHTML=sorting(library)[1].libraryID;
</script>

