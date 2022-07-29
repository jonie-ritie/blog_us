// Add back to top button for every post and info pages
// When to show the scroll link
const pageheight = document.documentElement.clientHeight;
// Our scroll link element
const toTopBtn = document.getElementById("return-to-top")
let scrollTop = 0
window.onscroll = () => {
    scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // 当滚动条滚到当前页面高度1/2的时候，显示“回到顶部”按钮
    if (scrollTop >= pageheight/2) {    // If page is scrolled more than 50px
        $('#return-to-top').fadeIn("fast");       // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut("fast");      // Else fade out the arrow
    }
    // scrollTop > pageheight/2 ? (toTopBtn.style.display = 'block') : (toTopBtn.style.display = 'none')
}
toTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})