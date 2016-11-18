var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.938976, lng: 30.323422},
    zoom: 17,
    disableDefaultUI: true,
    scrollwheel:  false,
    zoomControl: true
  });
  var image = 'img/map-marker.png';
  var studioMarker = new google.maps.Marker({
    position: {lat: 59.938645, lng: 30.323087},
    map: map,
    icon: image
  });
}

var link = document.querySelector(".btn-contact"),
  modal = document.querySelector(".modal-form"),
  overlay = document.querySelector(".modal-overlay"),
  close = document.querySelector(".modal-form-close"),
  form = modal.querySelector("form"),
  fullname = modal.querySelector("[name=fullname]"),
  email = modal.querySelector("[name=email]"),
  message = modal.querySelector("[name=message]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.add("modal-form-show");
  overlay.classList.add("overlay-show");
  fullname.focus();
}), 

close.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.remove("modal-form-show");
  modal.classList.remove("modal-error");
  overlay.classList.remove("overlay-show");
  fullname.classList.remove("modal-input-error");
  email.classList.remove("modal-input-error");
  message.classList.remove("modal-input-error");
});

form.addEventListener("submit", function(event) {
  if (!fullname.value) {
    event.preventDefault();
    modal.classList.remove("modal-error");
    fullname.classList.remove("modal-input-error");
    form.offsetWidth = form.offsetWidth;
    modal.classList.add("modal-error");
    fullname.classList.add("modal-input-error");
  } else if (!email.value) { 
    event.preventDefault();
    modal.classList.remove("modal-error");
    email.classList.remove("modal-input-error");
    form.offsetWidth = form.offsetWidth;
    modal.classList.add("modal-error");
    email.classList.add("modal-input-error");
    fullname.classList.remove("modal-input-error");
  } else if (!message.value) {
    event.preventDefault();
    modal.classList.remove("modal-error");
    message.classList.remove("modal-input-error");
    form.offsetWidth = form.offsetWidth;
    modal.classList.add("modal-error");
    message.classList.add("modal-input-error");
    fullname.classList.remove("modal-input-error");
    email.classList.remove("modal-input-error");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (modal.classList.contains("modal-form-show")) {
    modal.classList.remove("modal-form-show");
    modal.classList.remove("modal-error");
    overlay.classList.remove("overlay-show");
    fullname.classList.remove("modal-input-error");
    email.classList.remove("modal-input-error");
    message.classList.remove("modal-input-error");
    }
  }
});