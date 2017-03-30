

$(function(){

	/*
	$(".calculator.credit").accrue({
		mode: "compare",
		response_output_div: ".result.credit",
		response_compare:"<strong>Savings: $%savings%</strong>",
		error_text:"<span>Enter balance and rate to calculate savings.</span>",
		callback: function( elem, data ) {
			console.log( data );
			if ( data.loan_1 != 0 ) {
				$(".result.credit").addClass('calculated');
			} else {
				$(".result.credit").removeClass('calculated');
			}
		}
	});
	*/
	$(".calculator.credit input[type=text]").on('keyup',function(){
		var interest_old = parseFloat( $('.calculator.credit .amount').val().replace(/[^0-9.]/g,"") ) * parseFloat( $('.calculator.credit .rate').val().replace(/[^0-9.]/g,"") / 100 );
		var interest_new = parseFloat( $('.calculator.credit .amount').val().replace(/[^0-9.]/g,"") ) * .089;
		if ( interest_old-interest_new > 0 ) {
			$(".result.credit").addClass('calculated');
			$(".result.credit").html( "<strong>Interest Savings: $"+(interest_old-interest_new).toFixed(2)+"</strong>" );
		} else {
			$(".result.credit").removeClass('calculated');
			$(".result.credit").html( "<span>Enter balance and rate to calculate savings.</span>" );
		}
	});


	$(".calculator.loan-auto").accrue({
		mode: "compare",
		response_output_div: ".result.auto",
		response_compare:"<strong>Payments as low as: $%loan_2_payment_amount%/mo<br>Savings: $%savings%</strong>",
		error_text:"<span>Enter loan info to see payment and savings.</span>",
		callback: function( elem, data ) {
			if ( data.loan_1 != 0 ) {
				$(".result.auto").addClass('calculated');
			} else {
				$(".result.auto").removeClass('calculated');
			}
		}
	});

	$(".calculator.loan-personal").accrue({
		mode: "compare",
		response_output_div: ".result.personal",
		response_compare:"<strong>Payments as low as: $%loan_2_payment_amount%/mo<br>Savings: $%savings%</strong>",
		error_text:"<span>Enter loan info to see payment and savings.</span>",
		callback: function( elem, data ) {
			if ( data.loan_1 != 0 ) {
				$(".result.personal").addClass('calculated');
			} else {
				$(".result.personal").removeClass('calculated');
			}
		}
	});

	$(".numbers-only").keyup(function(){
		var fixed=$(this).val().replace(/[^0-9.]/g,"");
		$(this).val( fixed );
	});

});

