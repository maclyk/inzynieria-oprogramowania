<SCRIPT>
<!--
var text2="";
var z=0;
function pokazujNapis(z){
  var kursor="|";
  var tekst=document.f.tekst.value;
  text2=text2+tekst.substring(z,z+1);
  window.status=text2+kursor;
  b=z+1;
  if (z<tekst.length){
    setTimeout("pokazujNapis(b)",100);
  } else {
    window.status=tekst;
  }
};

function przejdz() {
  history.go(document.f.go.value);
}

//-->
</SCRIPT>

<form name="f">
<input type="text" name="tekst" value="To jest tekst!!!">
<input type="button" value="Pokaż" onClick="pokazujNapis(0)">
<br><input type="text" name="go" value="1">
<input type="button" value="go" onMouseOver="przejdz()">
</form>

<script>
document.write("Dane przeglądarki:");
document.write("Nazwa: "+navigator.appName+"<BR>");
document.write("Wersja: "+navigator.appVersion+"<BR>"); document.write("Język: "+navigator.language+"<BR>");
</script>
