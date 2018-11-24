function find() {


var input = parseInt(document.getElementById("amount").value);
    document.getElementById("amt").innerHTML="\u20B9 "+input;

var notes=[2000,500,100,50,20,10,5,1];
var  count= [];
var i;
  //logic                
    for(i=0;i<notes.length;i++)
    {
    if(input >= notes[i])
    {
     count[i] = parseInt(input / notes[i]);
     input = input - count[i] * notes[i];
    }     
    }
 
 //displaying selected notes
    for(i=0;i<=notes.length;i++){
        if(count[i]!=undefined){
       var node=document.createElement("LI");
        var textnode=document.createTextNode("\u20B9 "+notes[i]);
        node.appendChild(textnode);
        document.getElementById("myUL").appendChild(node);
            
        
//displaying count
    var span = document.createElement("SPAN");
    var txt = document.createTextNode(count[i]);
    span.className = "number";
    span.appendChild(txt);
//attaching count with notes        
    node.appendChild(span);
        
        }
    }
     
}







//
function find() {


var input = parseInt(document.getElementById("amount").value);
    document.getElementById("amt").innerHTML="\u20B9 "+input;

var notes=[2000,500,100,50,20,10,5,1];
var  count= [];
var i;
  //logic                
    for(i=0;i<notes.length;i++)
    {
    if(input >= notes[i])
    {
     count[i] = parseInt(input / notes[i]);
     input = input - count[i] * notes[i];
    }     
    }
 
 //displaying selected notes
    for(i=0;i<=notes.length;i++){
        if(count[i]!=undefined){
       var node=document.createElement("LI");
        var textnode=document.createTextNode("\u20B9 "+notes[i]);
        node.appendChild(textnode);
        document.getElementById("myUL").appendChild(node);
            
        
//displaying count
    var span = document.createElement("SPAN");
    var txt = document.createTextNode(count[i]);
    span.className = "number";
    span.appendChild(txt);
//attaching count with notes        
    node.appendChild(span);
        
        }
    }
     
}



//



function find() {


var input = parseInt(document.getElementById("amount").value);
    document.getElementById("amt").innerHTML="\u20B9 "+input;

var notes=[2000,500,100,50,20,10,5,1];
var  count= [];
var i;
  //logic                
    for(i=0;i<notes.length;i++)
    {
    if(input >= notes[i])
    {
     count[i] = parseInt(input / notes[i]);
     input = input - count[i] * notes[i];
    }     
    }
 
 //displaying selected notes
    for(i=0;i<=notes.length;i++){
        if(count[i]!=undefined){
       var node=document.createElement("LI");
        var textnode=document.createTextNode("\u20B9 "+notes[i]);
        node.appendChild(textnode);
        document.getElementById("myUL").appendChild(node);
            
        
//displaying count
    var span = document.createElement("SPAN");
    var txt = document.createTextNode(count[i]);
    span.className = "number";
    span.appendChild(txt);
//attaching count with notes        
    node.appendChild(span);
        
        }
    }
     
}

