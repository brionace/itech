$(document).ready(function(){
    var store = [];
    $(".btn").click(function(e){
		e.preventDefault();
		var id = $(this).attr('id');
		
		if( id == 'AC' ){
			
			clearScreen();
			
		}else if( id == 'SAVE' ){
			
		}else{
			
			//Clear screen if already done calculations
			if($('.answer').text() != '0'){
				//clearScreen();
			}			
			
			if( id != null && $(this).attr('data-symbol') != null ){
				store.push('<span>'+$(this).attr('data-symbol')+'</span>');
			}else{
				store.push( $(this).text() );				
			}			
			
			$('.calculus').html(store);
			
			if( id == 'EQUALS' ){

				$('.calculus').html(store).addClass('calculated');
				$('.answer').show();
				doCalculations()

			}			
			
		}
		
		
    });
	
	console.log(store);
	
	function doCalculations(){
		var newStore = [];
		
		
		//Strip array of strings
		$.each(store, function(index, value) {
		  newStore.push($('<span/>').html(value).text());
		});
		
		var answer = newStore.slice(0,-1).join("");
		console.log(eval(answer));
		$('.answer').text( eval(answer) )
	}
	
	function clearScreen(){
		$('.answer').hide();
		$('.calculus').text('0').removeClass('calculated');
		store.length = 0;		
	}
	
});