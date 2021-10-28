var modal = document.getElementById("modal");
var modal_btn = document.getElementById("modal-btn");
var span = document.getElementsByClassName("close")[0];

modal_btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if(event.target==modal) {
    modal.style.display = "none";
  }
}