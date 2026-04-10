let name1=[]
let i=0
function addName(){
    let ename=document.getElementById('eName');
    name1.push(ename.value);
    ename.value = ""
    console.log(name1);
}
function sortDisplay(){
    name1.sort()
    console.log(name1)
    let names=document.getElementById('storedNames')
    names.innerHTML=""
    for(e of name1){
     names.innerHTML+=`<li>${e}</li>`
    }
}
