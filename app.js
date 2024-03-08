let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');

let str = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click", (b) => {
        if (b.target.innerHTML == "="){
            str = eval(str);
            screen.value = str;
        } else if (b.target.innerHTML == "AC"){
            str = "";
            screen.value = str;
        } else if (b.target.innerHTML == "DEL"){
            str = str.substring(0, str.length - 1);
            screen.value = str;
        } else {
            str += b.target.innerHTML;
            screen.value = str;
        }
    })
})