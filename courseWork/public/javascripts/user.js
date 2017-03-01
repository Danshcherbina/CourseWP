$(document).ready(function(){

  var validEmail = false;
  var validPassword = false;
  var validPassword2 = false;


  $("#uProf").submit(function(event){

    console.log("New article");
    event.preventDefault();

    var email = $("#email").val();
    var password = $("#password").val();
    var password2 = $("#password2").val();


    if(email == "") {
      $("#email").parent().removeClass("has-success").addClass("has-error");
      $(".emailBlock").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
      $(".emailBlock .glyphicon-ok").remove();
      validEmail = false;
    } else {
      $("#email").parent().removeClass("has-error").addClass("has-success");
      $(".emailBlock").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
      $(".emailBlock .glyphicon-remove").remove();
      validEmail = true;
    }

    if(password == "") {
      $("#password").parent().removeClass("has-success").addClass("has-error");
      $(".passwordBlock").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
      $(".acategoryBlock .glyphicon-ok").remove();
      validPassword = false;
    } else {
      $("#password").parent().removeClass("has-error").addClass("has-success");
      $(".passwordBlock").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
      $(".passwordBlock .glyphicon-remove").remove();
      validPassword = true;
    }

    if(password2 == "") {
      $("#asummary").parent().removeClass("has-success").addClass("has-error");
      $(".password2Block").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
      $(".password2Block .glyphicon-ok").remove();
      validPassword2 = false;
    } else {
      $("#password2").parent().removeClass("has-error").addClass("has-success");
      $(".password2Block").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
      $(".password2Block .glyphicon-remove").remove();
      validPassword2 = true;
    }



    if(validEmail == true && validPassword == true&& validPassword2 == true) {
      $("form").unbind('submit').submit();
    }

  });

});
