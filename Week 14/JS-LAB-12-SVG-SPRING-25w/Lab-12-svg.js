//LAB 12 - SVG OUTDOOR SCENE

document.addEventListener("DOMContentLoaded", () => {
    var sun = document.getElementById("sun");
    var sky = document.getElementById("sky");
    var isDay = true;

    // Interaction: Click sun to toggle day/night
    sun.addEventListener("click", () => {
        isDay = !isDay;
        sky.setAttribute("fill", isDay ? "lightblue" : "midnightblue");
        sun.setAttribute("fill", isDay ? "gold" : "lightyellow");
    });
});