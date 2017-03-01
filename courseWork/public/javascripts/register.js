$(document).ready(function(){

  var validName = false;
  var validEmail = false;
  var validpassword = false;
  var validpassword2 = false;

  $("form").submit(function(event){
    event.preventDefault();
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    var username = $("#username").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var password2 = $("#password2").val();

    if(username == ""|| username.length > 18) {
      $("#username").parent().removeClass("has-success").addClass("has-error");
      $(".usernameBlock").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
      $(".usernameBlock .glyphicon-ok").remove();
      validName = false;
    } else {
      $("#username").parent().removeClass("has-error").addClass("has-success");
      $(".usernameBlock").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
      $(".usernameBlock .glyphicon-remove").remove();
      validName = true;
    }

    if(email == ""|| email.search(pattern) != 0) {
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
      $(".passwordBlock .glyphicon-ok").remove();
      validpassword = false;
    } else {
      $("#password").parent().removeClass("has-error").addClass("has-success");
      $(".passwordBlock").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
      $(".passwordBlock .glyphicon-remove").remove();
      validpassword = true;
    }

    if(password2 == "") {
      $("#password2").parent().removeClass("has-success").addClass("has-error");
      $(".password2Block").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
      $(".password2Block .glyphicon-ok").remove();
      validpassword2 = false;
    } else {
      $("#password2").parent().removeClass("has-error").addClass("has-success");
      $(".password2Block").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
      $(".password2Block .glyphicon-remove").remove();
      validpassword2 = true;
    }

    if(validName == true && validpassword == true&& validpassword2 == true&& validEmail == true) {
      $("form").unbind('submit').submit();
    }

  });

});
