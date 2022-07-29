const sunCodeIcon = document.getElementById("sunCodeIcon");
const suncodeContainer = document.getElementById("suncodeContainer");
sunCodeIcon.addEventListener("click", function () {
    suncodeContainer.style.display = "flex";
    suncodeContainer.onclick = function () {
        suncodeContainer.style.display = "none";
    }
})