<!DOCTYPE html> 
<html> 
<head> 
<script>
function removecolor()
{
var x=document.getElementById("colorSelect");
x.remove(x.selectedIndex);
}
</script>
 

</head><body><form> 
<select id="colorSelect"> 
<option>Red</option> 
<option>Green</option> 
<option>White</option> 
<option>Black</option> 
</select> 
<input type="button" onclick="removecolor()" value="Select and Remove"> 
</form></body></html>