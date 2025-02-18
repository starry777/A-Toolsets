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
          <div style="height:800px">纵向滚动测试内容...</div>
          <p style="color:red">← 请上下滑动查看内容</p>
      `
  },
  {
      title: "旅游指南",
      preview: "十大必去海岛推荐",
      content: `
          <h2>2023最佳度假海岛</h2>
          <div style="height:1200px">更多详情内容...</div>
      `
  },
  {
      title: "美食课堂",
      preview: "法式烘焙技巧",
      content: `
          <h2>经典可颂制作教程</h2>
          <div style="height:1500px">烘焙步骤演示...</div>
      `
  },
  {
      title: "健身指南",
      preview: "家庭徒手训练计划",
      content: `
          <h2>30天塑形计划</h2>
          <div style="height:2000px">每日训练详情...</div>
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
  
  // 确保每次打开滚动位置归零
  document.querySelector('.detail-overlay').scrollTop = 0;
  
  document.body.classList.add('no-scroll');
  document.querySelector('.detail-overlay').classList.add('active');
  document.querySelector('.close-btn').classList.add('active');
}

// 隐藏详情
function hideDetail() {
  document.body.classList.remove('no-scroll');
  document.querySelector('.detail-overlay').classList.remove('active');
  document.querySelector('.close-btn').classList.remove('active');
}

// // 点击处理
// function handleOverlayClick(e) {
//   if (e.target === document.querySelector('.detail-overlay')) {
//       hideDetail();
//   }
// }

// 初始化
initCards();

// 优化触摸滚动体验
let startY = 0;
const overlay = document.querySelector('.detail-overlay');

overlay.addEventListener('touchstart', e => {
  startY = e.touches[0].clientY;
}, { passive: true });

overlay.addEventListener('touchmove', e => {
  // 判断是否允许滚动
  const isScrollingUp = e.touches[0].clientY > startY;
  const isAtTop = overlay.scrollTop <= 0;
  const isAtBottom = overlay.scrollTop + overlay.clientHeight >= overlay.scrollHeight;
  
  if ((isAtTop && isScrollingUp) || (isAtBottom && !isScrollingUp)) {
      e.preventDefault();
  }
}, { passive: false });