const inputBox=document.querySelector("#input-box");
const listContainer=document.querySelector("#list-container");
const button=document.querySelector("button");

button.addEventListener('click',function(){

    if(inputBox.value===''){
        alert("you must write something...");

    }
    else{
        let li =document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="x";
        li.appendChild(span);

    }
    inputBox.value=''
});

listContainer.addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
    
},false);