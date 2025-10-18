let count1 = document.getElementById("count1");
let count2 = document.getElementById("count2");
let count3 = document.getElementById("count3");

let c1 = 0, c2 = 0, c3 = 0;

let counter = setInterval(() => {
    if (c1 < 120) {
        c1++;
        count1.innerText = c1;
    }
    if (c2 < 15) {
        c2++;
        count2.innerText = c2;
    }
    if (c3 < 40) {
        c3++;
        count3.innerText = c3;
    }
    if (c1 >= 120 && c2 >= 15 && c3 >= 40) {
        clearInterval(counter);
    }
}, 50);

document.getElementById("joinBtn").addEventListener("click", () => {
    alert("Welcome to Mozilla Firefox Club! We are excited to have you!");
});