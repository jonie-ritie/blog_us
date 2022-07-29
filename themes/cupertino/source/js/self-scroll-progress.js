// vertical scroll progress bar, address: https://codepen.io/EricPorter/pen/rNexdrG
$(window).scroll(function(){
    var width = $(window).width();
    if (width < 1200 && width > 800){
        return;
    }
    var top = $(window).scrollTop();
    var height = $(document).height();
    height = height - $(window).height();
    var progress = (top)/height;
    progress = progress * 100;
    progress = Math.round(progress);
    var readPercentage = document.getElementById("percentage");
    if (progress > 0) {
        readPercentage.style.visibility = "visible";
    } else if (progress <= 0) {
        readPercentage.style.visibility = "hidden";
    }
    if(progress >= 100){
        progress = 100;
        // progress = "100% - COMPLETE！";
        readPercentage.style.background = "limegreen";
    } else {
        readPercentage.style.background = "grey";
    }
    progress = progress + "%";
    // progress = progress.substring(0, progress.length - 2);
    $("#percentage").html(progress);
});