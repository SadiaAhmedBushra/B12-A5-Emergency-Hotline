// Heart Button
let heartCount = 0;

for (let i=0; i<document.querySelectorAll(".fa-heart").length; i++){
    document.querySelectorAll(".fa-heart")[i].addEventListener("click", function () {
        heartCount++;
        document.getElementById("heart-counter-nav").innerHTML = heartCount + `<span><img src="assets/heart.png" alt="" class="h-[20px] w-[20px]"></span>`;
    });
}

// Call Button
const catchCoinBtn = document.getElementById("coin-btn");

let coinCount = 100;
catchCoinBtn.innerHTML = coinCount + 
  ' <span><img src="assets/coin.png" class="h-[20px] w-[20px]"></span>';

const catchHistoryBox = document.getElementById("history-box");

document.querySelector(".cards-container").addEventListener("click", function (e){
    if(e.target.classList.contains("call-btn")){

        const catchAllCallBtns = e.target.closest(".call-btn");
        const cardCaught = catchAllCallBtns.closest(".card-1");

        const hotlineName = cardCaught.querySelector("h3").innerText;
        const hotlineNo = cardCaught.querySelector("h2").innerText;

        if(coinCount<20){
            alert("Sorry! You do not have enough coins to make a call.");
            return;
        }

        coinCount -=20;
        catchCoinBtn.innerHTML = coinCount + `<span><img src="assets/coin.png" alt="" class="h-[20px] w-[20px]"></span>`;

        alert("Calling " + hotlineName + " " + hotlineNo + "...");

        
        const currentTime = new Date().toLocaleTimeString();

        const historyList = document.createElement("div");
        historyList.classList.add("mt-4");
        historyList.innerHTML = `<div class="history-element flex justify-between items-center">
        <div class="flex-col justify-between">
        <p class="text-sm font-semibold font-inter">${hotlineName}</p>
        <p class="text-sm text-gray-500 font-madurai">${hotlineNo}</p>
        </div>
        <p class="text-xs text-gray-400">${currentTime}</p>
        </div>
        `;
        catchHistoryBox.appendChild(historyList);
    }
})


// Clear History
document.getElementById("btn-clear").addEventListener("click", function () {
    catchHistoryBox.innerHTML = "";
});


// Copy Button
const catchCopyBtnNavbar = document.getElementById("copy-btn-navbar");

let copyCount = 0;
catchCopyBtnNavbar.innerHTML = copyCount + 
  '<span>Copy</span>';


document.querySelector(".cards-container").addEventListener("click", function (e){
    if(e.target.classList.contains("copy-btn")){

        const catchAllCopyBtn = e.target.closest(".copy-btn");
        const cardCaught = catchAllCopyBtn.closest(".card-1");

        // const hotlineName = cardCaught.querySelector("h3").innerText;
        const hotlineNo = cardCaught.querySelector("h2").innerText;

        copyCount++;
        catchCopyBtnNavbar.innerHTML = copyCount + `<span>Copy</span>`;

        navigator.clipboard.writeText(hotlineNo);
        alert( copyCount + " item copied!");
    }
})
