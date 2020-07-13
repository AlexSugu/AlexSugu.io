var i = 0;
setInterval(() => {
    call();
}, 6000);

function call() {
    var item = document.querySelectorAll(".slider-scrol-item");
    item[i].style.opacity = "1";
    for (var j = 0; j <= 2; j++) {
        if (j != i) {
            item[j].style.opacity = "0";
        } else {
            continue;
        }
    }
    i++;
    if (i == 3) {
        i = 0;
    }
}

function bth_one() {
    i = 0;
    call();
}

function bth_two() {
    i = 1;
    call();
}

function bth_three() {
    i = 2;
    call();
}