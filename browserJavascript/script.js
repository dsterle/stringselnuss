const underScoreHeadbar = document.querySelector('.underScoreHeadbar');
const headbarOnClicks = document.querySelectorAll('.headNav>div');
const projektInfosButton = document.querySelector('.projektInfosButton');
const scrollUpButton = document.querySelector('.scrollUp');
const loginButton = document.querySelector(".loginButton");
const loginBox = document.querySelector(".loginBox");
const registrierungButton = document.querySelector(".registrierungButton");
const registrierungBox = document.querySelector(".registrierungBox");
const languageButton = document.querySelector(".language");

var currentScrollPosition = window.pageYOffset;
var loginClicked = false;
var registrierungClicked = false;

$("section").hide();
$(".scrollUp").hide();
$(".projektInfos").show();

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
        item.style.background = "rgb(109, 132, 159)";
        item.style.cursor = "pointer";
        item.style.transition = "0.8s";
    });

    item.addEventListener("mouseout", function () {
        item.style.background = "rgb(52,73,94)";
        item.style.transition = "0.8s";
    });
});

loginButton.addEventListener("mouseover", function (event) {
    loginButton.style.background = "rgb(109, 132, 159)";
    loginButton.style.cursor = "pointer";
    loginButton.style.transition = "0.8s";
});

loginButton.addEventListener("mouseout", function () {
    loginButton.style.background = "rgb(52,73,94)";
    loginButton.style.transition = "0.8s";
});

registrierungButton.addEventListener("mouseover", function (event) {
    registrierungButton.style.background = "rgb(109, 132, 159)";
    registrierungButton.style.cursor = "pointer";
    registrierungButton.style.transition = "0.8s";
});

registrierungButton.addEventListener("mouseout", function () {
    registrierungButton.style.background = "rgb(52,73,94)";
    registrierungButton.style.transition = "0.8s";
});

scrollUpButton.addEventListener("click", function () {
    scrollUpButton.style.borderColor = "rgb(179, 212, 255)";
    scrollUpButton.style.background = "rgb(179, 212, 255)";
    scrollUpButton.style.transition = "0.8s";
    window.scrollTo({top: 0, behavior:"smooth"});
    $(".scrollUp").fadeOut();
});

scrollUpButton.addEventListener("mouseover", function () {
    scrollUpButton.style.borderColor = "rgb(109, 132, 159)";
    scrollUpButton.style.background = "rgb(109, 132, 159)";
    scrollUpButton.style.cursor = "pointer";
    scrollUpButton.style.transition = "0.8s";
});

scrollUpButton.addEventListener("mouseout", function () {
    scrollUpButton.style.borderColor = "rgb(52,73,94)";
    scrollUpButton.style.background = "rgb(52,73,94)";
    scrollUpButton.style.transition = "0.8s";
});

loginButton.addEventListener("click", function () {
    if (loginClicked === false) {
        if (registrierungClicked === true) {
            registrierungBox.style.transform = "translateY(-100%)";
            registrierungBox.style.transition = "0.8s";
            registrierungClicked = false;
        }
        loginBox.style.transform = "translateY(0%)";
        loginBox.style.transition = "0.8s";
        loginClicked = true;
    } else if (loginClicked === true){
        loginBox.style.transform = "translateY(-100%)";
        loginBox.style.transition = "0.8s";
        loginClicked = false;
    }
});

document.querySelectorAll(".loginform>input[type=submit]").forEach(function (item, index) {
    item.addEventListener("mouseover", function () {
        item.style.borderColor = "rgb(109, 132, 159)";
        item.style.background = "rgb(109, 132, 159)";
        item.style.cursor = "pointer";
        item.style.transition = "0.8s";
    });
});

document.querySelectorAll(".loginform>input[type=submit]").forEach(function (item, index) {
    item.addEventListener("mouseout", function () {
        item.style.background = "rgb(52,73,94)";
        item.style.transition = "0.8s";
    });
});

registrierungButton.addEventListener("click", function () {
    if (registrierungClicked === false) {
        if (loginClicked === true) {
            loginBox.style.transform = "translateY(-100%)";
            loginBox.style.transition = "0.8s";
            loginClicked = false;
        }
        registrierungBox.style.transform = "translateY(0%)";
        registrierungBox.style.transition = "0.8s";
        registrierungClicked = true;
    } else if (registrierungClicked === true){
        registrierungBox.style.transform = "translateY(-100%)";
        registrierungBox.style.transition = "0.8s";
        registrierungClicked = false;
    }
});

document.querySelectorAll(".registrierungform>input[type=submit]").forEach(function (item, index) {
    item.addEventListener("mouseover", function () {
        item.style.borderColor = "rgb(109, 132, 159)";
        item.style.background = "rgb(109, 132, 159)";
        item.style.cursor = "pointer";
        item.style.transition = "0.8s";
    });
});

document.querySelectorAll(".registrierungform>input[type=submit]").forEach(function (item, index) {
    item.addEventListener("mouseout", function () {
        item.style.background = "rgb(52,73,94)";
        item.style.transition = "0.8s";
    });
});

languageButton.addEventListener("mouseover", function () {
    languageButton.style.borderColor = "rgb(109, 132, 159)";
    languageButton.style.background = "rgb(109, 132, 159)";
    languageButton.style.cursor = "pointer";
    languageButton.style.transition = "0.8s";
});

languageButton.addEventListener("mouseout", function () {
    languageButton.style.borderColor = "rgb(52,73,94)";
    languageButton.style.background = "rgb(52,73,94)";
    languageButton.style.transition = "0.8s";
});



