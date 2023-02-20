nombre_persona_array=[];
function submit(){
  var tomar_nombre=document.getElementById("nombre_1").value;
nombre_persona_array.push(tomar_nombre);
console.log(tomar_nombre);
console.log(nombre_persona_array);

 
  document.getElementById("display_name").innerHTML=nombre_persona_array.toString();
}
function sorting(){
    nombre_persona_array.sort();
    var i=nombre_persona_array.join("<br>");
    console.log(nombre_persona_array);
    document.getElementById("sorted").innerHTML=i.toString();

}
function show(){
  var i=nombre_persona_array.join("<br>");
  console.log(nombre_persona_array);
  document.getElementById("p1").innerHTML=i.toString();
  document.getElementById("botón_ordenar").style.display="block";

}
function searching(){
  var s=document.getElementById("s1").value;
  var found=0;
  var j;
  for(j=0; j<nombre_persona_array.lenght; j++){
    if(s==nombre_perona_array[j]){
      found=found+1;
    }
  }
  document.getElementById("p2").innerHTML="name found" + found + "time/s";
  console.log("found name" + found + "time/s");
}