const markAllRead = document.querySelector(".mark-btn");
const count = document.querySelector(".count");
const notifications = document.querySelectorAll(".notif-bgc");
const redDots = document.querySelectorAll(".red-dot");
let notifCount = count.textContent;
const notificationCount = notifications.length;
console.log(notificationCount);
const clearNotifications = () => {
      const markedCount = notifCount.textContent = "0";
      count.innerHTML = markedCount

     notifications.forEach(notification => {
            notification.classList.remove("notif-bgc")
     }); 
     
     redDots.forEach(dot => {
            dot.classList.remove("red-dot")
     })
}
markAllRead.addEventListener("click", clearNotifications);

