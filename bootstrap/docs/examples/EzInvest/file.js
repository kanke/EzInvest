$(document).ready(function () {
currency=new Array(
"British Pound",
"U.S. Dollar",
"Russian Ruble");
stocks=new Array("Large-Cap","Mid-Cap"," Small-Cap");
commodity=new Array("Soft","Hard","Merging");
hedges=new Array("Long-Short Funds","Market-Neutral Funds","Event-Driven Fund","Macro Funds");

populateSelect();

$(function() {

      $('#category').change(function(){
        populateSelect();
    });
    
/*	$('#item').change(function(){
	
$('#table').css("display", "block");
	  }); */
}); 


function populateSelect(){
    category=$('#category').val();
    $('#item').html('');
    
       eval(category).forEach(function(t) { 
            $('#item').append('<option>'+t+'</option>');
        });
    }
});

 
    
 