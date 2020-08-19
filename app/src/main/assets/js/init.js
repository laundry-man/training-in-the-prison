let first = document.getElementById('first');
let second = document.getElementById('second');

let firstIn = document.getElementById('first-in');
let secondIn = document.getElementById('second-in');

setTimeout(function() {
    firstIn.classList.remove('fade-in');
    firstIn.classList.add('fade-out');
    setTimeout(function() {
        first.style.display = 'none';
        second.style.display = 'inline';
        secondIn.classList.add('fade-in');
        setTimeout(function() {
            second.style.display = 'inline';
            secondIn.style.opacity = '1';
        }, 3000);
    }, 3000);
}, 3000);