$(document).ready(function(){

  var validName = false;
  var validpassword = false;

  $("form").submit(function(event){
    event.preventDefault();

    var username = $("#username").val();
    var password = $("#password").val();

    if(username == "") {
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


    if(validName == true && validpassword == true) {
      $("form").unbind('submit').submit();
    }

  });

});
