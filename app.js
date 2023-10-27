// function welcome(){
//     alert("WELCOME TO  < AH >  CALCULATOR")
// }
// welcome()
function press(e){
    document.getElementById('input').value += e
}
function eq(){
    var a = document.getElementById('input')
    a.value = eval(a.value)
}
function clr(){
    document.getElementById('input').value = ('')
    
}
var b = document.getElementById('input')
function del(){

    b.value = b.value.toString().slice(0, -1)
}

    // var content=document.getElementsByTagName("input","body")[0];
    // var darkMode=document.getElementById('dark');
    // darkMode.addEventListener("click",function(){
    //     darkMode.classList.toggle('active');
    //     content.classList.toggle('night')
    // })
