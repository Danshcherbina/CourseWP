$(document).ready(function(){

  var validSearch = false;

  $("#search_form").submit(function(event){
    event.preventDefault();

    var search = $("#search").val();
    console.log(search);
    if(search == ""){
      validSearch = false;
    } else {
      validSearch = true;
    }

    if(validSearch == true) {
      $("#search_form").unbind('submit').submit();
    }

  });

});
