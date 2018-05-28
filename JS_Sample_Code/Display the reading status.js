	<script>
var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: false
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
   var a=[];
   var b=[];
   for(var i=0;i<library.length;i++){
   
   
   a.push(library[i].title+":-"+library[i].author+"-");
  
   
   if(library[i].readingStatus)
   {
   			a.push("Already read"+"."+("<br>"));
   }
	else{
   // document.getElementById("demo2").innerHTML="not read"+a;
   a.push("You still need to read"+"."+("<br>"));
    
    }
    
    }
     document.getElementById("demo").innerHTML=a+"";
    //delete car.temp;
    //document.getElementById("demo2").innerHTML=car.temp;
</script>
