window.onload = function() {
  init();
};

function init() {
  hideDescriptions();
  setToggleButtons();
}


function hideDescriptions(){
  var descriptions = document.querySelectorAll('.image-description');
  for (var i = 0; i < descriptions.length; i++) {
    var description = descriptions[i];
    description.style.display = "none";
  }
}

function setToggleButtons(){
  let images = document.querySelectorAll('.clickable-img')
  for (var i = 0; i < images.length; i++) {
    var img = images[i]
    img.addEventListener("click", showDescription)
  }
}

function showDescription(event) {
  var element = event.target;
  var target = element.dataset.target;
  var description = document.getElementById(target);
  if (description.style.display == "none") {
    hideDescriptions();
    description.style.display = "inline-block";
  } else {
    description.style.display = "none";
  }
}