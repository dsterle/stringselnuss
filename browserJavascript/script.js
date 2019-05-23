const underScoreHeadbar = document.querySelector('.underScoreHeadbar');
const headbarOnClicks = document.querySelectorAll('.headNav>div, .loginButton, .registrierungButton');
const projektInfosButton = document.querySelector('.projektInfosButton');
const scrollUpButton = document.querySelector('.scrollUp');

$("section").hide();
$(".scrollUp").hide();
$(".projektInfos").show();

var currentScrollPosition = window.pageYOffset;

$(window).scroll(function() {
    currentScrollPosition = window.pageYOffset;
    $(window).scrollTop();
    if (currentScrollPosition > 300) {
        $(".scrollUp").show();
    } else {
        $(".scrollUp").fadeOut();
    }
});

headbarOnClicks.forEach(function (item, index) {
    item.addEventListener("click", function () {
        /*underScoreHeadbar.style.width = (parseInt(getComputedStyle(item).width) + 41).toString() + 'px';
        underScoreHeadbar.style.left = (item.getBoundingClientRect().left).toString() + 'px';
        underScoreHeadbar.style.transition = '1s'*/
        window.scrollTo({top: 0, behavior:"smooth"});
        if (item.className === "projektInfosButton") {
            $("section").hide();
            $(".projektInfos").show();
        }
        if (item.className === "shopsButton") {
            $("section").hide();
            $(".shops").show();
        }

        $(".underScoreHeadbar").css({"width":(parseInt(getComputedStyle(item).width) + parseInt(getComputedStyle(item).padding)*2).toString(),
                                        "left":(item.getBoundingClientRect().left).toString() + 'px',
                                        "transition":"1s"});
    });

    item.addEventListener("mouseover", function (event) {
        item.style.background = "rgb(129, 182, 255)";
        item.style.cursor = "pointer";
        item.style.transition = "0.8s";
    });

    item.addEventListener("mouseout", function () {
        item.style.background = "rgb(179, 212, 255)";
        item.style.transition = "0.8s";
    });
});

scrollUpButton.addEventListener("click", function () {
    scrollUpButton.style.borderColor = "rgb(179, 212, 255)";
    scrollUpButton.style.background = "rgb(179, 212, 255)";
    scrollUpButton.style.transition = "0.8s";
    window.scrollTo({top: 0, behavior:"smooth"});
    $(".scrollUp").fadeOut();
});

scrollUpButton.addEventListener("mouseover", function () {
    scrollUpButton.style.borderColor = "rgb(129, 182, 255)";
    scrollUpButton.style.background = "rgb(129, 182, 255)";
    scrollUpButton.style.cursor = "pointer";
    scrollUpButton.style.transition = "0.8s";
});

scrollUpButton.addEventListener("mouseout", function () {
    scrollUpButton.style.borderColor = "rgb(179, 212, 255)";
    scrollUpButton.style.background = "rgb(179, 212, 255)";
    scrollUpButton.style.transition = "0.8s";
});

