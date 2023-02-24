let count = 0;

let countEl = document.querySelector('.counting');
let btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click' , function(e) {
        const value = e.currentTarget.classList;
        if(value.contains('decrease')) {
            count--;
        } else if(value.contains('increase')) {
            count++;
        } else {
            count = 0;
        };

        countEl.textContent = count;
    })
})