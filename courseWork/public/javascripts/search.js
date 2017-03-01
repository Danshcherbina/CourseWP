
        $(function(){
         $('#searching').on('keyup', function(e){



           if(e.keyCode === 13) {
             var parameters = { search: $(this).val() };
             var result = '';
             if(parameters.search.length != ""){
               $.getJSON( '/searching', parameters, function(data) {

                 result += '<div class="Lists" style="margin-top : 20px; background-color: #F0F8FF;">';
                   result += "<label>Founded results:<br></label>";

                 if(data != ""){
                 $.each(data, function() {


                   result += "<div class='panel panel-default'>";
                   result +=  "<div class='panel-heading'><a href=" + this.address + ">" + this.aname + "</a></div>";
                   result +=  "<div class='panel-body'>" + this.acategory + "</div>";
                   result += "</div>";

                 });
                   result +="</div>:";
               } else {
                 result +=   "<div class='panel panel-warning'><div class='panel-body'>No results for your query.</div></div>";
               }
               $('#results').html(result);
             });
             }

            };
         });
        });
