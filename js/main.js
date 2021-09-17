$(document).ready(function () {
  $("#login").click(function () {
    $(".mask").css("display", "block")
    $(".modal-login").css("display", "block")
  })

  $(".close-button").click(function () {
    $(".modal-login").css("display", "none")
    $(".modal-signup").css("display", "none")
    $(".mask").css("display", "none")
  })

  $("#sign_btn").click(function () {
    $(".modal-login").css("display", "none")
    $(".modal-signup").css("display", "block")
  })

  $("#register").click(function () {
    $(".mask").css("display", "block")
    $(".modal-signup").css("display", "block")
  })

  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      $(".modal-login").css("display", "none")
      $(".mask").css("display", "none")
      $(".modal-signup").css("display", "none")
    }
  })

  //   $(".mask").click(function () {})
})
