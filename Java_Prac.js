let btns = document.querySelectorAll(".btn, .btn_symb")
let exp = document.querySelector(".exp")
let ans = document.querySelector(".ans")
let res = document.querySelector("#res")
let AC = document.querySelector("#AC")
let DEL = document.querySelector("#DEL")

let exp_arr = [];
const operators = ['+', '-', '*', '/'];

btns.forEach((btn) => {
    btn.addEventListener("click", (el) => {
        let input = el.target.innerText
        let lastElement = exp_arr[exp_arr.length - 1];

        if (operators.includes(input) && operators.includes(lastElement)) {
            exp_arr.pop()
        }

        exp_arr.push(input)

        exp.innerText = exp_arr.join("");
    })
})

res.addEventListener("click", () => {
    let result = eval(exp_arr.join(""))
    ans.innerText = result
})

AC.addEventListener("click", () => {
    ans.innerText = ""
    exp.innerText = ""
    exp_arr = []
})

DEL.addEventListener("click", () => {
    exp_arr.pop()
    exp.innerText = exp_arr.join("")
    ans.innerText = ""
})