let signUpname=document.getElementById("signUpname")
let signUpEmail=document.getElementById("signUpEmail")
let signUpPassword =document.getElementById("signUpPassword")
let signUp=document.getElementById("signUp")
let requir=document.getElementById("required")
let content=document.getElementById("content")
let signInEmail=document.getElementById("signInEmail")
let signInPassword=document.getElementById("signInPassword")
let data=[]
if(localStorage.getItem("data1")){
data=JSON.parse(localStorage.getItem("data1"))
}



            // empty input
function empty () {
  if(signUpname.value==="" ||signUpEmail.value==="" ||signUpPassword.value=="")  {
    
    return false
  }
  else{
    return true
  }
}

           // email Rebeat
 function emailRepeat() {
  for(var i=0; i< data.length;i++){
    if (data[i]. email.toLowerCase() ===signUpEmail.value.toLowerCase()) {
 
      return false
  }
  }
  
}
 if(signUp !=null){
  signUp.addEventListener("click" ,singup)
 
function singup() {
  if (empty()=== false) {


    document.getElementById('required').innerHTML ='<span class="text-danger m-3 ">All inputs is required</span>'
    return false
}
if(emailRepeat()===false){

  document.getElementById('required').innerHTML ='<span class="text-danger mt-3">email already exists</span>'

  return false
}
  
if(validName() &&validPassword()&& validPassword()){
   {
        let info={
            name:signUpname.value,
            email:signUpEmail.value,
            password:signUpPassword.value,
           }
           data.push(info);
           localStorage.setItem("data1",JSON.stringify(data))
           document.getElementById('required').innerHTML = '<span class="text-success m-3">Success</span>'
           console.log(data);
           return true
    }

      }
 }

 }





        //   /VALID signup NAME/
function validName() {
    let regex=/^[a-zA-Z]{1,20}$/
    if(regex.test(signUpname.value)){

        return true
    }else{

      return false
  }

}
              // VALID signup EMAIL
function validEmail(){
 let regex1=/^[a-zA-Z]{1,20}@[a-zA-Z]{1,10}\.[a-z]{1,3}$/
   if(regex1.test(signUpEmail.value)){

        return true
 }else{
   
    return false
}
 }



//   valid signup password

function validPassword() {
  let regex2=/^[a-zA-Z]{1,15}$/
  if (regex2.test(signUpPassword.value)) {
  
    return true
  }else{
    return false
  }
  
}


//  login
function emptylogin() {
  if(signInEmail.value===""||signInPassword.value===""){

    return false;
  }
  
}



//  if (sign!= null) {
  // content.addEventListener("click",sign)
function sign() {
  if (emptylogin()==false){
    document.getElementById('required').innerHTML ='<span class="text-danger m-3 ">All inputs is required</span>'
    return false
  }
  let email=signInEmail.value;
  let password=signInPassword.value;
  for(var i=0; i<data.length;i++){
  if(data[i].email.toLowerCase() == email.toLowerCase() && data[i].password.toLowerCase()==password.toLowerCase()){

   document.getElementById('required').innerHTML = '<span class="text-success m-3">Success</span>'
  
  localStorage.setItem("dataName",data[i].name)
  
window.location.href='home.html'



 return true
}

else{
  document.getElementById('required').innerHTML ='<span class="text-danger m-3 ">incorrect email or password</span>'
  }
}
}
//  }
// to say welcome in home page
let username = localStorage.getItem('dataName')
if (username) {
    document.getElementById('content').innerHTML = "Welcome " + username
}

function logout(){
  window.location.href='index.html'
  localStorage.removeItem("dataName")
}

