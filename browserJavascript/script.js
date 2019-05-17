const underScoreHeadbar = document.querySelector('.underScoreHeadbar');
const headbarOnClicks = document.querySelectorAll('.headNav>div, .loginButton, .registrierungButton');

headbarOnClicks.forEach(function (item, index) {
    item.addEventListener("click", function () {
        /*underScoreHeadbar.style.width = (parseInt(getComputedStyle(item).width) + 41).toString() + 'px';
        underScoreHeadbar.style.left = (item.getBoundingClientRect().left).toString() + 'px';
        underScoreHeadbar.style.transition = '1s'*/
        $(".underScoreHeadbar").css({"width":(parseInt(getComputedStyle(item).width) + parseInt(getComputedStyle(item).padding)*2+1).toString(),
                                        "left":(item.getBoundingClientRect().left).toString() + 'px',
                                        "transition":"1s"});
    })
})
