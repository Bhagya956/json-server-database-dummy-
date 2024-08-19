var d=document.forms;
console.log(d[0]);

d[0].addEventListener("submit",(e)=>{

    // method: 'POST',
  headers: {
    'Content-Type'; 'application/json',

    // Add any other headers as needed


  
  bodyJSON.stringify({
    username:e.target[0].value,
    password:e.target[1].value,
}),

e.preventDefault();
                //console.log(e);
//                 body:JSON.stringify({
//                     username:e.target[0].value,
//                     password:e.target[1].value,
// }),
e.target[0].value="";
                 e.target[1].value="";

                }).then((val)=>{
                          return val.json()
                       }).then((val)=>{
                           console.log(val);
                       })
                //})


//localStorage.setItem("user",JSON.stringify(obj))

//})




















































// var d=document.getElementsByTagName("button");
// d[0].addEventListener("click",function(){

//     fetch("http://localhost:3001/posts/",{
      

//       method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',},
  

//    // Add any other headers as needed

//  body: JSON.stringify({
//    USERNAME: 'value1',
//    PASSWORD: 'value2',
//   }),
//   })

    
    



//     }).then((val)=>{
//         return val.json()
//     }).then((val)=>{
//         console.log(val);
//     })
// })