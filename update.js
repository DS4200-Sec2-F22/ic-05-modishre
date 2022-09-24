
// Modifiying webpage

<button onclick="myFunction()">Click</button>
<p id="demo"></p>

<script>
var count = 0;
function myFunction() {
  document.getElementById("demo").innerHTML = count++;
}
</script>