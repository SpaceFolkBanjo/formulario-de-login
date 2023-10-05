document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginBtn");

  loginBtn.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    loginBtn.appendChild(ripple);

    const rect = loginBtn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + "px";

    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";

    ripple.addEventListener("animationend", function () {
      ripple.remove();
    });
  });
});
