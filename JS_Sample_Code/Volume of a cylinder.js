<script>
	var r=window.prompt("Enter radius");
    var h=window.prompt("Enter height");
    
    var cylender = {radius:r,height:h,pi:3.14};
    
  var volume =(cylender.pi*cylender.radius*cylender.radius*cylender.height);
    
  //  document.getElementById("demo").innerHTML = volume.toFixed(4);
    window.prompt("Volume of radius :-",volume);

</script>
