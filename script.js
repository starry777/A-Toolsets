// 顶部导航栏
const nav = document.querySelector('.nav-top')
window.addEventListener('scroll', function () {
  const n = document.documentElement.scrollTop
  n > 10 ? nav.style.top = '0px' : nav.style.top = '-80px'
})

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//   window.scrollBy(0, 10); // 水平滚动0像素，垂直滚动20像素
// });

// 内容区
// const nr = document.querySelector('.nr')
// const nrn = document.querySelector('.nrn')
// window.addEventListener('scroll', function () {
//   const n = document.documentElement.scrollTop
//   if (n > 10) {
//     nr.style.top = '-900px'
//     nrn.style.top = '-1680px'
//     // nrn.style.opacity = '1'
//     nr.style.borderRadius = '0%'
//     nrn.style.borderRadius = '0%'
//   } else {
//     nr.style.top = '500px'
//     nrn.style.top = '1000px'
//     // nrn.style.opacity = '0'
//     nr.style.borderRadius = '100%'
//     nrn.style.borderRadius = '100%'
//   }
// })


// 顶部滚动条
const progressBar = document.querySelector('.top2');

window.addEventListener('scroll', () => {
  // 获取页面总高度和视口高度
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  const windowHeight = window.innerHeight;

  // 计算有效滚动高度
  const scrollableHeight = documentHeight - windowHeight;

  // 获取当前滚动位置
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // 计算百分比（添加边界检查）
  let percentage = (currentScroll / scrollableHeight) * 100;
  percentage = Math.min(Math.max(percentage, 0), 100);  // 确保在 0-100 之间

  progressBar.style.width = percentage + '%';
});


// 详细界面弹出
const tc = document.querySelector('.cards-tc')

addEventListener('click', function () {
  // tc.style.display = 'block'
  tc.style.top = '0px'
})









// 卡片数据
const cardsData = [
  {
      title: "科技新闻",
      preview: "最新人工智能突破",
      content: `
          <h2>深度神经网络新突破</h2>
          <img src="https://picsum.photos/800/300?tech" class="detail-image">
          <p>研究人员近日宣布在卷积神经网络领域取得重大进展...</p>
          <ul>
              <li>训练速度提升40%</li>
              <li>能耗降低25%</li>
              <li>支持实时动态学习</li>
          </ul>
      `
  },
  {
      title: "旅游指南",
      preview: "十大必去海岛推荐",
      content: `
          <h2>2023最佳度假海岛</h2>
          <img src="https://picsum.photos/800/300?island" class="detail-image">
          <p>根据最新旅游杂志评选，这些海岛值得放入你的旅行清单：</p>
          <ol>
              <li>马尔代夫群岛</li>
              <li>大堡礁心形礁</li>
              <li>帕劳水母湖</li>
          </ol>
      `
  },
  {
      title: "美食课堂",
      preview: "法式烘焙技巧",
      content: `
          <h2>经典可颂制作教程</h2>
          <img src="https://picsum.photos/800/300?food" class="detail-image">
          <p>材料准备：</p>
          <ul>
              <li>高筋面粉 500g</li>
              <li>黄油 300g</li>
              <li>酵母 10g</li>
          </ul>
          <p>详细步骤...</p>
      `
  },
  {
      title: "健身指南",
      preview: "家庭徒手训练计划",
      content: `
          <h2>30天塑形计划</h2>
          <img src="https://picsum.photos/800/300?gym" class="detail-image">
          <p>每日训练安排：</p>
          <ul>
              <li>周一：核心训练</li>
              <li>周三：上肢力量</li>
              <li>周五：下肢爆发力</li>
          </ul>
          <p>注意事项...</p>
      `
  }
];





// 动态生成卡片
function initCards() {
  const container = document.getElementById('cardContainer');
  cardsData.forEach((card, index) => {
      const cardElement = document.createElement('div');
      cardElement.className = 'cards';
      cardElement.innerHTML = `
          <h3>${card.title}</h3>
          <p>${card.preview}</p>
      `;
      cardElement.onclick = () => showDetail(index);
      container.appendChild(cardElement);
  });
}

// 显示详情
function showDetail(index) {
  const detailContent = document.querySelector('.detail-content');
  detailContent.innerHTML = cardsData[index].content;
  
  document.body.classList.add('no-scroll');
  document.querySelector('.detail-overlay').classList.add('active');
  document.querySelector('.nav-header').classList.add('active');
}

// 隐藏详情（保持原有逻辑）
function hideDetail() {
  document.body.classList.remove('no-scroll');
  document.querySelector('.detail-overlay').classList.remove('active');
  document.querySelector('.nav-header').classList.remove('active');
}

// 点击处理
// function handleOverlayClick(e) {
//     if (e.target === document.querySelector('.detail-overlay')) {
//         hideDetail();
//     }
// }

// 初始化
initCards();

// 触摸事件处理
document.querySelector('.detail-overlay').addEventListener('touchmove', function(e) {
  e.stopPropagation();
}, { passive: false });