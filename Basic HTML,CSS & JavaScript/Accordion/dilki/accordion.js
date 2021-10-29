var heading = document.querySelectorAll(".drop_title");

heading.forEach(function(el) {
    el.addEventListener("click", function() {
        el.parentNode.querySelector('.accordion_box li ul').classList.toggle('drop_list');
    });
});



