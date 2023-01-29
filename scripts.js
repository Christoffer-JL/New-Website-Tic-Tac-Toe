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
    var largeImage = document.querySelector("#large-image");
    largeImage.classList.add("fade-in");
    largeImage.src = thumbnail.src;
    setTimeout(()=>{
        largeImage.classList.remove("fade-in")
    },750)
}

function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    img.parentElement.insertBefore(lens, img);
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
      var pos, x, y;
      e.preventDefault();
      pos = getCursorPos(e);
      x = pos.x - (lens.offsetWidth  / 2);
      y = pos.y - (lens.offsetHeight / 2);
      if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
      if (x < 0) {x = 0;}
      if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
      if (y < 0) {y = 0;}
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      a = img.getBoundingClientRect();
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      x = x - window.pageXOffset + 0;
      y = y - window.pageYOffset + 0;
      return {x : x, y : y};
    }
  }

  function fileSelection(id , buttonId) {

    const allButtons = document.querySelectorAll(".file-button");
    allButtons.forEach(button => {
        button.classList.remove("active-file-button");
    });

    document.getElementById(buttonId).classList.add("active-file-button");



    document.querySelectorAll(`.code-file`).forEach(element => {
       element.style.display = "none";
       
   });

   const element = document.getElementById(id);
   element.style.display = "block";

}

let isMoreTextVisible = false;
function btnPress() {
  if (isMoreTextVisible) {
    document.getElementById("more-text").style.display = "none";
    document.getElementById("hiddenImg").style.display = "block";
    isMoreTextVisible = false;
  } else {
    document.getElementById("more-text").style.display = "block";
    document.getElementById("hiddenImg").style.display = "none";
    isMoreTextVisible = true;
  }

}

