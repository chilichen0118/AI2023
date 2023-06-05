const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
        //     576以上
        576: {
            slidesPerView: 3,
            slidesPerGroup: 3
        },

    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});


// 下拉選單
let date = document.querySelector('.filter-date .filter-btn');
let type = document.querySelector('.filter-type .filter-btn');
let dateDropdown = document.querySelector('.filter-date-list');
let typeDropdown = document.querySelector('.filter-type-list');
let dateDropdownList = document.querySelectorAll('.filter-date-list li');
let typeDropdownOne = document.querySelector('.filter-type-area-one');
let typeDropdownTwo = document.querySelector('.filter-type-area-two');
let typeDropdownAll = document.querySelectorAll('.filter-type-list-item li');
let dateText = document.querySelector('.filter-date .filter-type-text');
let typeText = document.querySelector('.filter-type .filter-type-text');


date.addEventListener('click', function () {
    if (dateDropdown.style.display === 'block') {
        dateDropdown.style.display = 'none';
    } else {
        dateDropdown.style.display = 'block';
    }
});

type.addEventListener('click', function () {
    if (typeDropdown.style.display === 'block') {
        typeDropdown.style.display = 'none';
    } else {
        typeDropdown.style.display = 'block';
    }
});


for (let i = 0; i < dateDropdownList.length; i++) {
    dateDropdownList[i].addEventListener('click', function (e) {
        e.preventDefault();
        let dateText = this.textContent;
        changeDateText(dateText);
    })
}

for (let i = 0; i < typeDropdownAll.length; i++) {
    typeDropdownAll[i].addEventListener('click', function (e) {
        e.preventDefault();
        let typeText = this.textContent;
        changeTypeText(typeText);
    })
}

for (let i = 0; i < typeDropdownAll.length; i++) {
    typeDropdownAll[i].addEventListener("change", function () {
        updateButtonText();
    });
}


function changeDateText(text) {
    dateText.textContent = text;
    dateDropdown.style.display = 'none';
}

function changeTypeText(text) {
    typeText.textContent = text;
    typeDropdown.style.display = 'none';
}

document.addEventListener("click", function (e) {
    let targetElement = e.target;
    if (!date.contains(targetElement) && !dateDropdown.contains(targetElement) && !type.contains(targetElement) && !typeDropdown.contains(targetElement)) {
        dateDropdown.style.display = "none";
        typeDropdown.style.display = "none";
    }
});

// scrollTop
const scrollTop = document.querySelector('.top');
scrollTop.addEventListener('click', function () {
    scrollToTop(.5);
});

function scrollToTop(duration) {
    let start = window.scrollY;
    let startTime = performance.now();

    function scrollStep(timestamp) {
        let currentTime = timestamp || performance.now();
        let elapsedTime = currentTime - startTime;
        let scrollDistance = Math.max(start - (elapsedTime / (duration * 1000)) * start, 0);

        window.scrollTo(0, scrollDistance);

        if (window.scrollY > 0) {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
}

// ai card

const toolInfo = [
    //   01
    {
        imgURL: `https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool1.png?raw=true`,
        title: `Chatbot Builder`,
        description: `建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。`,
        author: `卡卡`,
        hashTag: `#聊天`
    },
    //   02
    {
        imgURL: `https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool2.png?raw=true`,
        title: `Image Recognition Platform`,
        description: `專業的圖像識別平台，識別圖像、分類、標記等。`,
        author: `杰杰`,
        hashTag: `#影像辨識`
    },
    //   03
    {
        imgURL: `https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool3.png?raw=true`,
        title: `Language Translation API`,
        description: `專業的語言翻譯 API，實現文本翻譯功能，支援多種格式的文本。`,
        author: `琪琪`,
        hashTag: `#翻譯`
    },
    //   04
    {
        imgURL: `https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool4.png?raw=true`,
        title: `Sentiment Analysis API`,
        description: `自動識別文本中的情感傾向，包括正向、負向和中性等。適用於情感分析、社交媒體監控、市場調查等。`,
        author: `昊昊`,
        hashTag: `#行銷`
    },
    //   05
    {
        imgURL: `https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool5.png?raw=true`,
        title: `Fraud Detection Platform`,
        description: `預防詐騙活動，適用於銀行、金融、電商等。`,
        author: `卡卡`,
        hashTag: `#客服`
    },
    //   06
    {
        imgURL: `https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool6.png?raw=true`,
        title: `Voice Assistant SDK`,
        description: `通過語音控制應用程式、設備，實現多種功能，例如播放音樂、查詢天氣、發送信息等。`,
        author: `杰杰`,
        hashTag: `#生產力`
    }
];

const toolsContent = document.querySelector('.tools-content');
toolsContent.replaceChildren();
for (let i = 0; i < toolInfo.length; i++) {
    let toolList = document.createElement('li');
    toolList.classList.add('d-flex', 'tools-list');
    toolList.innerHTML =
        `
        <div class="tool-img">
            <img src="${toolInfo[i].imgURL}" alt="${toolInfo[i].title}">
        </div>
        <div class="tools-info">
            <h2 class="tools-info-title">${toolInfo[i].title}</h2>
            <p class="tools-info-content">${toolInfo[i].description}</p>
        </div>
        <div class="tools-ai d-flex justify-content-sb align-items-center">
            <p>AI 模型</p>
            <span>${toolInfo[i].author}</span>
        </div>
        <div class="tools-tag d-flex justify-content-sb align-items-center">
            <p>${toolInfo[i].hashTag}</p>
            <a href="#"><span class="material-icons">
                share
            </span></a>
        </div>
    `
    toolsContent.appendChild(toolList);
}

// qa
let qaButton = document.querySelectorAll('.qa-list li');
let qaAnswer = document.querySelectorAll('.qa-list-content p');

for (let i = 0; i < qaButton.length; i++) {
    qaButton[i].addEventListener('click', function () {
        if (qaAnswer[i].style.display === 'block') {
            qaAnswer[i].style.display = 'none';
        } else {
            qaAnswer[i].style.display = 'block';
        }
    });
}

// phone menuDropdown
const menuBtn = document.querySelector('.menu-btn .menu-btn-hamburger');
const menuCloseBtn = document.querySelector('.menu-btn .menu-btn-close');
const menuDropdown = document.querySelector('.menu-collapse')
menuBtn.addEventListener('click', function() {
    menuDropdown.style.zIndex = 999;
    menuDropdown.style.opacity = 1;
    menuBtn.style.display = 'none';
    menuCloseBtn.style.display = 'block';
});

menuCloseBtn.addEventListener('click', function() {
    menuDropdown.style.zIndex = -1;
    menuDropdown.style.opacity = 0;
    menuCloseBtn.style.display = 'none';
    menuBtn.style.display = 'block';
})
