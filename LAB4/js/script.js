let btn = document.getElementById("btn")
let count = document.getElementById("count")
let number = 0

btn.addEventListener("click", () => {
    number = number + 1
    count.innerHTML = number
})
