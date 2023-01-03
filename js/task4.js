


var tex=document.getElementById("tex")
var x=document.getElementById("tex2")
tex.onclick=function(){
    x.removeAttribute('disabled')
};
// //////
  var pass=document.getElementById("pas")
 var password=pass.value.length;
 var span=document.getElementById("spann")

 pass.onkeyup=function(){
 if(0<pass.value.length &&pass.value.length<3){
   
    span.innerHTML='OOOps! The password is week'
 }
 else if(3<=pass.value.length && pass.value.length<6){
   
    span.innerHTML='One More Time! The password is medium';
 }
 else if(pass.value.length >=6 && pass.value.length<10){
    span.innerHTML='Do well! The password is strong';
 }else{
    span.innerHTML='Password must have more 1 character and does not transgress 10';
 }
 return false;

};
/////////////////
var icon=document.getElementById("eye") 

icon.onclick=function(){
    
if(pass.type=='password'){
   pass.setAttribute("type",Text);


    }
    else{
        pass.type="password"
        
    }
}
// /////////////

 function mail(){
  var val=document.getElementById("email")
  var at=document.getElementById("email").value.indexOf('@')
  var dot=document.getElementById("email").value.lastIndexOf('.')
  if(at<4 || dot-at<3 || val.value.length-dot < 3 ){
alert("Note! Your Email Invalid XXXX@XX.XX")
  };

  }
  










// ////////////////////////
function vForm(){
var tex=document.getElementById("tex")
  var te = tex.value.length;
if(te< 2){
alert("Plz! Enter 2 or more character in frist name");
return false;
}
var x=document.getElementById("tex2")
  var te2 = x.value.length;
if(te2< 2){
alert("Plz! Enter 2 or more character in last name");
return false;
}
// /////////
var sel=document.getElementById('Select1')
if(sel.value=="-1"){
alert(" Plz!..select country ");
return false;
}
////////////// 
var f_cv= document.getElementById('cv')
var fl_cv=f_cv.value.indexOf('.pdf')
if(fl_cv==-1){
    alert('Make sure that the file extension is "pdf" ');
    return false;
}
// ////////////////

var te_ar=document.getElementById('textArea')
var tex_ar=te_ar.value.length
if( tex_ar>20){
alert('The permissible limit in textarea only 20 characters');
return false;
};


};