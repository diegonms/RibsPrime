document.addEventListener("DOMContentLoaded", function () {
  var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: window.location.href,
    width: 128,
    height: 128,
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.transform = "scale(1.05)";
      item.style.transition = "0.3s";
    });
    item.addEventListener("mouseout", () => {
      item.style.transform = "scale(1)";
    });
  });

  const orderButton = document.querySelector(".order-button");
  orderButton.addEventListener("mouseover", () => {
    orderButton.style.backgroundColor = "#ff9800";
    orderButton.style.color = "black";
    orderButton.style.transition = "0.3s";
  });
  orderButton.addEventListener("mouseout", () => {
    orderButton.style.backgroundColor = "black";
    orderButton.style.color = "#E87722";
  });
});
