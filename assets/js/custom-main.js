const formSubmitHandler = () => {
  alert("Form Submitted!");
  //window.location.reload();
  window.setTimeout(function () {
    location.reload();
  }, 3000);
};
const nameBlurHandler = () => {
  let value = $("#name").val();
  if (value === "") {
    $("#name").css({ border: "1px solid red", background: "#ffe6e6" });
    $(".validate-name").show();
  } else {
    $(".validate-name").hide();
    $("#name").css({ border: "1px solid #ced4da", background: "#fff" });
  }
};

const emailBlurHandler = () => {
  let value = $("#email").val();
  if (value === "") {
    $("#email").css({ border: "1px solid red", background: "#ffe6e6" });
    $(".validate-email").show();
  } else {
    $(".validate-email").hide();
    $("#email").css({ border: "1px solid #ced4da", background: "#fff" });
  }
};

const subjectBlurHandler = () => {
  let value = $("#subject").val();
  if (value === "") {
    $("#subject").css({ border: "1px solid red", background: "#ffe6e6" });
    $(".validate-subject").show();
  } else {
    $(".validate-subject").hide();
    $("#subject").css({ border: "1px solid #ced4da", background: "#fff" });
  }
};

const messageBlurHandler = () => {
  let value = $("#message").val();
  if (value === "") {
    $("#message").css({ border: "1px solid red", background: "#ffe6e6" });
    $(".validate-message").show();
  } else {
    $(".validate-message").hide();
    $("#message").css({ border: "1px solid #ced4da", background: "#fff" });
  }
};
