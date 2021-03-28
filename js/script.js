/*function UserInfo(name) {
    this.name = name;
    this.age = 17;
}

console.log(new UserInfo('Vasia'));
console.log(new UserInfo('Liena'));
*/











let myVar = 0;

function myEvent() {

    if (myVar == 0) {
        document.getElementById('p_new').classList.add("p_new_view");
        document.getElementById('p').classList.add("p_hover");
        myVar++;
    } else {
        document.getElementById('p_new').classList.remove("p_new_view");
        document.getElementById('p').classList.remove("p_hover");
        myVar--;
    }

}




//Slider
$(document).ready(function() {
    $('.slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        dragable: true,
        touchThreshold: 10,
        swipe: true,
        touchMove: true,
        waitForAnimate: false,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

// Aktuality buttons

/* POP-UPS*/
var a = document.getElementsByClassName('text_btn-1');
var b = document.getElementsByClassName('item-1');
var ab = document.getElementsByClassName('s-1');
var ba = document.getElementsByClassName('x-1');

a[0].onclick = function() {
    b[0].classList.add("text-popup__show");
    ab[0].classList.add("btn-info-closed");
    ba[0].classList.add("x-show");
}
a[1].onclick = function() {
    b[0].classList.remove("text-popup__show");
    ab[0].classList.remove("btn-info-closed");
    ba[0].classList.remove("x-show");
}


/////

var c = document.getElementsByClassName('text_btn-2');
var d = document.getElementsByClassName('item-2');
var cd = document.getElementsByClassName('s-2');
var dc = document.getElementsByClassName('x-2');

c[0].onclick = function() {
    d[0].classList.add("text-popup__show");
    cd[0].classList.add("btn-info-closed");
    dc[0].classList.add("x-show");
}
c[1].onclick = function() {
    d[0].classList.remove("text-popup__show");
    cd[0].classList.remove("btn-info-closed");
    dc[0].classList.remove("x-show");
}


/////

var e = document.getElementsByClassName('text_btn-3');
var f = document.getElementsByClassName('item-3');
var ef = document.getElementsByClassName('s-3');
var fe = document.getElementsByClassName('x-3');

e[0].onclick = function() {
    f[0].classList.add("text-popup__show");
    ef[0].classList.add("btn-info-closed");
    fe[0].classList.add("x-show");
}
e[1].onclick = function() {
    f[0].classList.remove("text-popup__show");
    ef[0].classList.remove("btn-info-closed");
    fe[0].classList.remove("x-show");
}


/////

var g = document.getElementsByClassName('text_btn-4');
var h = document.getElementsByClassName('item-4');
var gh = document.getElementsByClassName('s-4');
var hg = document.getElementsByClassName('x-4');
g[0].onclick = function() {
    h[0].classList.add("text-popup__show")
    gh[0].classList.add("btn-info-closed");
    hg[0].classList.add("x-show");
}
g[1].onclick = function() {
    h[0].classList.remove("text-popup__show");
    gh[0].classList.remove("btn-info-closed");
    hg[0].classList.remove("x-show")
}

/////

var i = document.getElementsByClassName('text_btn-5');
var j = document.getElementsByClassName('item-5');
var ij = document.getElementsByClassName('s-5');
var ji = document.getElementsByClassName('x-5');

i[0].onclick = function() {
    j[0].classList.add("text-popup__show")
    ij[0].classList.add("btn-info-closed");
    ji[0].classList.add("x-show");
}
i[1].onclick = function() {
    j[0].classList.remove("text-popup__show");
    ij[0].classList.remove("btn-info-closed");
    ji[0].classList.remove("x-show")
}

/////

var k = document.getElementsByClassName('text_btn-6');
var l = document.getElementsByClassName('item-6');
var kl = document.getElementsByClassName('s-6');
var lk = document.getElementsByClassName('x-6');

k[0].onclick = function() {
    l[0].classList.add("text-popup__show")
    kl[0].classList.add("btn-info-closed");
    lk[0].classList.add("x-show");
}
k[1].onclick = function() {
    l[0].classList.remove("text-popup__show");
    kl[0].classList.remove("btn-info-closed");
    lk[0].classList.remove("x-show");
}

/////

/*var m = document.getElementsByClassName('text_btn-7');
var n = document.getElementsByClassName('item-7');
var mn = document.getElementsByClassName('s-7');
var nm = document.getElementsByClassName('x-7');

m[0].onclick = function() {
    n[0].classList.add("text-popup__show")
    mn[0].classList.add("btn-info-closed");
    nm[0].classList.add("x-show");
}
m[1].onclick = function() {
    n[0].classList.remove("text-popun__show");
    mn[0].classList.remove("btn-info-closed");
    nm[0].classList.remove("x-show");
}

/////

var o = document.getElementsByClassName('text_btn-8');
var p = document.getElementsByClassName('item-8');
var op = document.getElementsByClassName('s-8');
var po = document.getElementsByClassName('x-8');

o[0].onclick = function() {
    p[0].classList.add("text-popup__show")
    op[0].classList.add("btn-info-closed");
    po[0].classList.add("x-show");
}
o[1].onclick = function() {
    p[0].classList.remove("text-popun__show");
    op[0].classList.remove("btn-info-closed");
    po[0].classList.remove("x-show");
}*/