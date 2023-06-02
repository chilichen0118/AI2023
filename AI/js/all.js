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

