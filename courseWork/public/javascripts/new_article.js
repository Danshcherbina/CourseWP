


$(document).ready(function(){

  var validTitle = false;
  var validCategory = false;
  var validSum = false;
  var validText = false;



  $("#newa").submit(function(event){

    console.log("New")
    event.preventDefault();

    var atitle = $("#atitle").val();
    var category = $("#category").val();

    select = document.getElementById("category"); // Выбираем  select по id
    value = select.options[select.selectedIndex].value; // Значение value для выбранного option







    var asummary = $("#asummary").val();
    var atext = $("#atext").val();

    if($("#acategory").val() == "") {
      $("#acategory").val(value);


    }

    var acategory = $("#acategory").val();

    if(atitle == "") {
      $("#atitle").parent().removeClass("has-success").addClass("has-error");
      $('#1').html('<font color="red">Invalide data</font>');
      validTitle = false;
    } else {
      $("#atitle").parent().removeClass("has-error").addClass("has-success");
      $('#1').html('<font color="red" style="visibility: hidden;">Костыль</font>');

      validTitle = true;
    }

    if(acategory == "") {
      $("#acategory").parent().removeClass("has-success").addClass("has-error");
      $('#2').html('<font color="red">Invalide data</font>');

      validCategory = false;
    } else {
      $("#acategory").parent().removeClass("has-error").addClass("has-success");
$('#2').html('<font color="red" style="visibility: hidden;">Костыль</font>');
      validCategory = true;
    }

    if(asummary == "") {
      $("#asummary").parent().removeClass("has-success").addClass("has-error");
$('#3').html('<font color="red">Invalide data</font>');
      validSum = false;
    } else {
      $("#asummary").parent().removeClass("has-error").addClass("has-success");
$('#3').html('<font color="red" style="visibility: hidden;">Костыль</font>');
      validSum = true;
    }

    if(atext == "") {
      $("#atext").parent().removeClass("has-success").addClass("has-error");
$('#4').html('<font color="red">Invalide data</font>');
      validText = false;
    } else {
      $("#atext").parent().removeClass("has-error").addClass("has-success");
$('#4').html('<font color="red" style="visibility: hidden;">Костыль</font>');
      validText = true;
    }


   var regexp = /^[a-z\s]+$/i;
   if(!regexp.test(atitle)) {
       validTitle = false;
       $("#atitle").parent().removeClass("has-success").addClass("has-error");
       $('#1').html('<font color="red">Invalide data</font>');
   }

   if(!regexp.test(acategory)) {
      $("#acategory").parent().removeClass("has-success").addClass("has-error");
       validCategory = false;
       $('#2').html('<font color="red">Invalide data</font>');
   }




    if(validTitle == true && validCategory == true&& validSum == true&& validText == true) {
      $("form").unbind('submit').submit();
    //  $('#results').html('<label for="image"><font color="green">Ok</font></label> ');
    }else{
    //  $('#res').html('<label for="image"><font color="red">Invalide data</font></label>');
    }

  });

});
