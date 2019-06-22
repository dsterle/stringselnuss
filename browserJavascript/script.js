const underScoreHeadbar = document.querySelector('.underScoreHeadbar');
const headbarOnClicks = document.querySelectorAll('.headNav>div');
const projektInfosButton = document.querySelector('.projektInfosButton');
const neueListeButton = document.querySelector('.neueListeButton');
const shopsButton = document.querySelector('.shopsButton');
const kontaktButton = document.querySelector('.kontaktButton');
const impressumButton = document.querySelector('.impressumButton');
const scrollUpButton = document.querySelector('.scrollUp');
const loginButton = document.querySelector(".loginButton");
const loginBox = document.querySelector(".loginBox");
const registrierungButton = document.querySelector(".registrierungButton");
const registrierungBox = document.querySelector(".registrierungBox");
const languageButton = document.querySelector(".language");
const logoButton = document.querySelector(".logo");
const einkaufslisteUebernehmenButton = document.querySelector(".einkaufslisteUebernehmen");
const einkaufslisteSpeichernButton = document.querySelector(".einkaufslisteSpeichern");
const einkaufslisteLoeschenButton = document.querySelector(".einkaufslisteLoeschen");
const burgermenue = document.createElement("IMG");
const miniMenue = document.querySelector(".miniMenue");


var currentScrollPosition = window.pageYOffset;
var loginClicked = false;
var registrierungClicked = false;
var logged = false;
var miniMenueClicked = false;
var currentPage = projektInfosButton;

$("section").hide();
$(".scrollUp").hide();
$(".projektInfos").show();

logoButton.addEventListener("click", function() {
    window.open ("../index.html", "_self");
});

logoButton.addEventListener("mouseover", function() {
    logoButton.style.cursor = "pointer";
})

$(window).scroll(function() {
    currentScrollPosition = window.pageYOffset;
    $(window).scrollTop();
    if (currentScrollPosition > 300) {
        $(".scrollUp").show();
    } else {
        $(".scrollUp").fadeOut();
    }
});

function moveUnderScoreHeadbar() {
    $(".underScoreHeadbar").css({"width":(parseInt(getComputedStyle(currentPage).width) + parseInt(getComputedStyle(currentPage).padding)*2).toString(),
                                        "left":(currentPage.getBoundingClientRect().left).toString() + 'px',
                                        "transition":"1s"});
}

headbarOnClicks.forEach(function (item, index) {
    item.addEventListener("click", function () {
        window.scrollTo({top: 0, behavior:"smooth"});
        switch(item.className) {
            case "projektInfosButton":
                $("section").hide();
                $(".projektInfos").show();
                currentPage = projektInfosButton;
                break;
            case "neueListeButton":
                $("section").hide();
                $(".neueListe").show();
                currentPage = neueListeButton;
                break;
            case "shopsButton":
                $("section").hide();
                $(".shops").show();
                currentPage = shopsButton;
                break;
            case "kontaktButton":
                $("section").hide();
                $(".kontakt").show();
                currentPage = kontaktButton;
                break;
            case "impressumButton":
                $("section").hide();
                $(".impressum").show();
                currentPage = impressumButton;
                break;
        }
        moveUnderScoreHeadbar();
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

document.querySelectorAll("input[type=submit]").forEach(function (item, index) {
    item.addEventListener("mouseover", function () {
        item.style.borderColor = "rgb(109, 132, 159)";
        item.style.background = "rgb(109, 132, 159)";
        item.style.cursor = "pointer";
        item.style.transition = "0.8s";
    });

    item.addEventListener("mouseout", function () {
        item.style.background = "rgb(52,73,94)";
        item.style.transition = "0.8s";
    });

    item.addEventListener("click", function() {
        alert("Leider ist diese Funktion momentan nicht verfügbar.");
    })
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

languageButton.addEventListener("click", function() {
    alert("Leider ist diese Funktion momentan nicht verfügbar.");
})

einkaufslisteUebernehmenButton.addEventListener("mouseover", function () {
    einkaufslisteUebernehmenButton.style.background = "rgb(109, 132, 159)";
    einkaufslisteUebernehmenButton.style.cursor = "pointer";
    einkaufslisteUebernehmenButton.style.transition = "0.8s";
});

einkaufslisteUebernehmenButton.addEventListener("mouseout", function () {
    einkaufslisteUebernehmenButton.style.background = "rgb(52,73,94)";
    einkaufslisteUebernehmenButton.style.transition = "0.8s";
});

einkaufslisteSpeichernButton.addEventListener("mouseover", function () {
    einkaufslisteSpeichernButton.style.background = "rgb(109, 132, 159)";
    einkaufslisteSpeichernButton.style.cursor = "pointer";
    einkaufslisteSpeichernButton.style.transition = "0.8s";
});

einkaufslisteSpeichernButton.addEventListener("mouseout", function () {
    einkaufslisteSpeichernButton.style.background = "rgb(52,73,94)";
    einkaufslisteSpeichernButton.style.transition = "0.8s";
});

einkaufslisteLoeschenButton.addEventListener("mouseover", function () {
    einkaufslisteLoeschenButton.style.background = "rgb(109, 132, 159)";
    einkaufslisteLoeschenButton.style.cursor = "pointer";
    einkaufslisteLoeschenButton.style.transition = "0.8s";
});

einkaufslisteLoeschenButton.addEventListener("mouseout", function () {
    einkaufslisteLoeschenButton.style.background = "rgb(52,73,94)";
    einkaufslisteLoeschenButton.style.transition = "0.8s";
});

einkaufslisteUebernehmenButton.addEventListener("click", function() {
    if (document.querySelector(".eintrag").value === "") {
        alert("Bitte tragen Sie etwas in das Textfeld ein!");
    } else {
        var neuerEintrag = document.createElement("li");
        var neuerEintragInhalt = document.createTextNode(document.querySelector(".eintrag").value);
        neuerEintrag.style.listStyle = "none";
        neuerEintrag.style.padding = "10px";
        neuerEintrag.appendChild(neuerEintragInhalt);
        document.querySelector(".einkaufslisteInhalt").appendChild(neuerEintrag);
        document.querySelector(".eintrag").value = null;
    }
});

document.querySelector(".eintrag").addEventListener("keypress", function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
        if (document.querySelector(".eintrag").value === "") {
            alert("Bitte tragen Sie etwas in das Textfeld ein!");
        } else {
            var neuerEintrag = document.createElement("li");
            var neuerEintragInhalt = document.createTextNode(document.querySelector(".eintrag").value);
            neuerEintrag.style.listStyle = "none";
            neuerEintrag.style.padding = "10px";
            neuerEintrag.appendChild(neuerEintragInhalt);
            document.querySelector(".einkaufslisteInhalt").appendChild(neuerEintrag);
            document.querySelector(".eintrag").value = null;
        }
    }
});

einkaufslisteLoeschenButton.addEventListener("click", function() {
    var einkaufslisteUeberschrift = document.querySelectorAll(".einkaufslisteInhalt > li")[0];
    $(".einkaufslisteInhalt").empty();
    document.querySelector(".einkaufslisteInhalt").appendChild(einkaufslisteUeberschrift);
});

einkaufslisteSpeichernButton.addEventListener("click", function() {
    if(!logged){
        alert("Sie müssen eingeloggt sein, um die Liste zu speichern");
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
    }
});

burgermenue.setAttribute("src", "../img/burgermenue.svg");
    burgermenue.className = "burgermenue";
    burgermenue.addEventListener("mouseover", function () {
        burgermenue.style.background = "rgb(109, 132, 159)";
        burgermenue.style.cursor = "pointer";
        burgermenue.style.transition = "0.8s";
    });
    
    burgermenue.addEventListener("mouseout", function () {
        burgermenue.style.background = "rgb(52,73,94)";
        burgermenue.style.transition = "0.8s";
    });
    burgermenue.addEventListener("click", function() {
        console.log("hi");
        if(!miniMenueClicked){
            burgermenue.style.transform = "rotate(180deg)";
            miniMenue.style.transform = "translateX(103%)";
            miniMenue.style.transition = "0.8s";
            miniMenueClicked = true;
        } else {
            burgermenue.style.transform = "rotate(0deg)";
            miniMenue.style.transform = "translateX(-103%)";
            miniMenue.style.transition = "0.8s";
            miniMenueClicked = false;
        }
    });

function minimizeWindow() {
    headbarOnClicks.forEach(function(element) {
        element.remove();
    });
    underScoreHeadbar.style.visibility = "hidden";
    logoButton.style.left = "55px";
    document.body.appendChild(burgermenue);
}

function maximizeWindow() {
    if (miniMenueClicked) {
        burgermenue.style.transform = "rotate(-180deg)";
        miniMenue.style.transform = "translateX(-103%)";
        miniMenue.style.transition = "0.8s";
        miniMenueClicked = false;
    }
    headbarOnClicks.forEach(function(element) {
        document.querySelector(".headNav").appendChild(element);
    });
    underScoreHeadbar.style.visibility = "visible";
    logoButton.style.left = "0px";
    if(document.querySelector(".burgermenue") != null)
    document.querySelector(".burgermenue").remove();
    moveUnderScoreHeadbar();
}

const x = window.matchMedia("(max-width: 1400px)");
x.addListener(function(){
    if(x.matches) {
        minimizeWindow();
    } else {
        maximizeWindow();
    }
});
if (x.matches) {
    minimizeWindow();
} else {
    maximizeWindow();
}

document.querySelectorAll(".miniMenue>div").forEach(function (item, index) {
    item.addEventListener("click", function () {
        window.scrollTo({top: 0, behavior:"smooth"});
        switch(item.className) {
            case "projektInfosButton":
                $("section").hide();
                $(".projektInfos").show();
                currentPage = projektInfosButton;
                break;
            case "neueListeButton":
                $("section").hide();
                $(".neueListe").show();
                currentPage = neueListeButton;
                break;
            case "shopsButton":
                $("section").hide();
                $(".shops").show();
                currentPage = shopsButton;
                break;
            case "kontaktButton":
                $("section").hide();
                $(".kontakt").show();
                currentPage = kontaktButton;
                break;
            case "impressumButton":
                $("section").hide();
                $(".impressum").show();
                currentPage = impressumButton;
                break;
        }
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