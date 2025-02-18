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