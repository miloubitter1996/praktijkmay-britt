$(document).ready(function () {
  $(".nav-item").on("click", function (e) {
    oldObjChild = $(".nav-link.active").removeClass("active");
    selectedItem = $(this).find(".nav-link").addClass("active");
  });

  $("#contact-button").click(function () {
    const target = $("#section-5");
    $("html,body").animate(
      {
        scrollTop: target.offset().top,
      },
      100
    );
  });
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
