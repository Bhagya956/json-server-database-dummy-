var d=document.forms;
console.log(d[0]);

d[0].addEventListener("submit",function(e){
    e.preventDefault();


     fetch("http://localhost:3001/posts",{
         method:"post",
         headers:{
             'Content-Type': 'application/json',

         },
        body:JSON.stringify({
             username:e.target[0].value,
                   password:e.target[1].value,
       })

 }).then((val)=>{
        return val.json();
    }).then((val)=>{
       console.log(val);

 })

//     fetch("http://localhost:3001/posts",{
//         method:"get",

//     }).then((val)=>{
//         return val.json();
//     }).then((val)=>{
//         console.log(val);

//     })

    

 })


 var btn = document.getElementsByTagName("button");
 btn[0].addEventListener("click",()=>{
     window.location.assign("./one.html");
 })