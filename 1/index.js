const tabStats = window.document.getElementById("tab-stats");
const stats = window.document.getElementById("stats");

const tabNews = window.document.getElementById("tab-news");
const news = window.document.getElementById("news");

const tabShare = window.document.getElementById("tab-share");
const share = window.document.getElementById("share");

tabStats.addEventListener("click", () => {
  const elements = document.querySelectorAll("*");
  elements.forEach((element) => {
    element.classList.remove("active");
    element.classList.remove("show");
  });
  tabStats.classList.add("active");
  stats.classList.add("show");
});

tabNews.addEventListener("click", () => {
  const elements = document.querySelectorAll("*");
  elements.forEach((element) => {
    element.classList.remove("active");
    element.classList.remove("show");
  });
  tabNews.classList.add("active");
  news.classList.add("show");
});

tabShare.addEventListener("click", () => {
  const elements = document.querySelectorAll("*");
  elements.forEach((element) => {
    element.classList.remove("active");
    element.classList.remove("show");
  });
  tabShare.classList.add("active");
  share.classList.add("show");
});
