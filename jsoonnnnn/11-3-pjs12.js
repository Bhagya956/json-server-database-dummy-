var d=document.forms;
console.log(d[0]);

d[0].addEventListener("submit",function(e){
    e.preventDefault();




fetch("http://localhost:3001/posts",{
        method:"get",

    }).then((val)=>{
        return val.json();
    }).then((val)=>{
        console.log(val);

    })
})

    
