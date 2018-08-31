$(document).ready(function(){
    var store = [];
    $(".btn").click(function(e){
		e.preventDefault();
		var id = $(this).attr('id');
		
		if( id == 'AC' ){
			
			clearScreen();
			
		}else if( id == 'SAVE' ){			
			var data = { 'number': $('.answer').text(), 'ip': getIp(), 'browser': $.browser }
			$.post( "https://brianory.me/kano/save-csv.php", function( data ) {
			  if(data){
				  $('.answer').text('SAVED');
			  }
			});			
			
		}else{			
			// Add to store array
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
	
	
	function doCalculations(){
		var newStore = [];
		
		
		//Strip array of strings
		$.each(store, function(index, value) {
		  newStore.push($('<span/>').html(value).text());
		});
		
		var answer = newStore.slice(0,-1).join("");
		answer = eval(answer);
		$('.answer').text( answer.toLocaleString() )
	}
	
	function clearScreen(){
		$('.answer').hide();
		$('.calculus').text('0').removeClass('calculated');
		store.length = 0;		
	}
	
	function formatNumber(number) {
		var n = number.toString().split(".");
		n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return n.join(".");
	}
	
	function getIp(){
		var ip = '';
		$.getJSON("http://jsonip.com?callback=?", function (data) {
			ip = data;
		});	
		return ip;
	}
	
});