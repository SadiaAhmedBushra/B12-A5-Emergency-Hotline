// Heart Button
let heartCount = 0;

for (let i=0; i<document.querySelectorAll(".fa-heart").length; i++){
    document.querySelectorAll(".fa-heart")[i].addEventListener("click", function () {
        heartCount++;
        document.getElementById("heart-counter-nav").innerHTML = heartCount + `<span><img src="assets/heart.png" alt="" class="h-[20px] w-[20px]"></span>`;
    });
}


