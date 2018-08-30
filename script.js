$(document).ready(function(){
    var store = [];
    $(".btn").click(function(e){
		e.preventDefault();
		var id = $(this).attr('id');
		
		if( id == 'AC' ){
			
			$('.answer').text('').hide();
			$('.calculus').text('0').removeClass('calculated');
			store.length = 0;
			
		}else if( id == 'SAVE' ){
			
		}else if( id == 'EQUALS' ){

			$('.calculus').html(store).addClass('calculated');
			$('.answer').show();
			
		}else{
			
			if( id != null && $(this).attr('data-symbol') != null ){
				store.push('<span>'+$(this).attr('data-symbol')+'</span>');
			}else{
				store.push( $(this).text() );				
			}
			
			$('.calculus').html(store);
		}
		
		
    });
	
	console.log(store);
	
	function doCalculations(){
		
	}
	
});