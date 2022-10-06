// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
function focusPic(clicked_id) {
  var img = document.getElementById(`${clicked_id}`);
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = img.id;
  captionText.innerHTML = img.alt;
}

//Go to next and previous when clicking on the left button or the right button
const images = document.querySelectorAll(".image img");

function right() {
  let active = document.getElementById("caption");
  for (i = 0; i < images.length; i++) {
    if (images[i].alt == active.innerText && i < images.length - 1) {
      document.getElementById("left").style.visibility = "visible";
      if (i == images.length - 2) {
        document.getElementById("right").style.visibility = "hidden";
      }
      focusPic(images[i + 1].id);
      return focusPic;
    }
  }
}

function left() {
  let active = document.getElementById("caption");
  for (i = 0; i < images.length; i++) {
    if (images[i].alt == active.innerText && i > 0) {
      document.getElementById("right").style.visibility = "visible";
      if (i == 1) {
        document.getElementById("left").style.visibility = "hidden";
      }
      focusPic(images[i - 1].id);
      return focusPic;
    }
  }
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x),or anywhere close the modal
span.onclick = function () {
  modal.style.display = "none";
  document.getElementById("right").style.visibility = "visible";
  document.getElementById("left").style.visibility = "visible";
};

modal.onclick = function () {
  const ignorRight = document.getElementById("right").contains(event.target);
  const ignorLeft = document.getElementById("left").contains(event.target);
  const ignorCaption = document
    .getElementById("caption")
    .contains(event.target);
  const ignorImg = document.getElementById("img01").contains(event.target);
  if (!ignorRight && !ignorLeft && !ignorCaption && !ignorImg) {
    modal.style.display = "none";
    document.getElementById("right").style.visibility = "visible";
    document.getElementById("left").style.visibility = "visible";
  }
};

// Get the left button hidden when clicking on the first image
function leftoff() {
  document.getElementById("left").style.visibility = "hidden";
}

// Get the right button hidden when clicking on the last image
function rightoff() {
  document.getElementById("right").style.visibility = "hidden";
}

let back = document.querySelector(".back");
let arrow;

gsap.from(".s", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: CustomEase.create("custom", "M0,0 C0.514,0.028 0.314,1.014 1,1 "),
  stagger: 0.1,
});

back.addEventListener("mouseover", () => {
  arrow = back.querySelector("img");
  arrow.style.transform = "translate(-10px, 0px) scale(-1)";
  back.addEventListener("mouseout", () => {
    arrow.style.transform = "translate(0px, 0px) scale(-1)";
  });
});

back.addEventListener("click", () => {
  gsap.to(".s", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: CustomEase.create("custom", "M0,0 C0.514,0.028 0.314,1.014 1,1 "),
  });
  setTimeout(() => {
    window.open("../index.html", "_self");
  }, 1500);
});
