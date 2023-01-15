function goHome() {
    window.location.href = "Home.html";
  }

function colorChangeOnLoad() {

    const items = document.querySelectorAll("#hover-underline-animation");

items.forEach(item => {
    if ("/Websida-Luffaren-ny/" + item.getAttribute("href") ===  location.pathname) {
        item.classList.add("active");
    }
});
}

function changeLargeImage(thumbnail) {
    document.querySelector("#large-image").src = thumbnail.src;
  }