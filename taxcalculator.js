function calculate() {
	//Selecting input tag from HTML
	var monthly = document.getElementById('salary').value;
	var month = document.getElementById('month').value;
	var father = document.getElementById('father').checked;
	var mother = document.getElementById('mother').checked;
	var spouse = document.getElementById('spouse').checked;
	var children = document.getElementById('children').value;
	var others = document.getElementById('dedu').value;

	// Assign the value of output
	var other = others * 1
	var annual = monthly * 12;
	var personal = (annual * (20 / 100));
	var parent = (father + mother) * 1000000;
	var spouseRelif = (spouse * 1000000);
	var childRelif = (children * 500000);
	var taxIncome = personal + parent + spouseRelif + childRelif + other;
	var taxIncomeTotal = annual - taxIncome;
	var result;

	if (taxIncomeTotal < 2000000) {
		result = 0;
	}
	else if (taxIncomeTotal > 2000000 && taxIncomeTotal < 5000000) {
		result = (taxIncomeTotal - 2000000) * 0.05;
		document.getElementById('bb').textContent = (taxIncomeTotal - 2000000) * 0.05;
		// document.getElementById('aa').textContent=result;
		document.getElementById('a').textContent = 2000000;
		document.getElementById('b').textContent = taxIncomeTotal - 2000000;

	}
	else if (taxIncomeTotal > 5000000 && taxIncomeTotal < 10000000) {
		result = ((taxIncomeTotal - 5000000) * 0.1) + (3000000 * 0.05);
		document.getElementById('bb').textContent = (3000000) * 0.05;
		document.getElementById('cc').textContent = (taxIncomeTotal - 5000000) * 0.1;
		document.getElementById('a').textContent = 2000000;
		document.getElementById('b').textContent = 3000000;
		document.getElementById('c').textContent = taxIncomeTotal - 5000000;

	}
	else if (taxIncomeTotal > 10000000 && taxIncomeTotal < 20000000) {
		result = ((taxIncomeTotal - 10000000) * 0.15) + (3000000 * 0.05) + (5000000 * 0.1);
		document.getElementById('bb').textContent = (3000000) * 0.05;
		document.getElementById('cc').textContent = 5000000 * 0.1;
		document.getElementById('dd').textContent = (taxIncomeTotal - 10000000) * 0.15;
		document.getElementById('a').textContent = 2000000;
		document.getElementById('b').textContent = 3000000;
		document.getElementById('c').textContent = 5000000;
		document.getElementById('d').textContent = taxIncomeTotal - 10000000;

	}
	else if (taxIncomeTotal > 20000000 && taxIncomeTotal < 30000000) {
		result = ((taxIncomeTotal - 20000000) * 0.20) + (3000000 * 0.05) + (5000000 * 0.1) + (10000000 * 0.15);
		document.getElementById('bb').textContent = (3000000) * 0.05;
		document.getElementById('cc').textContent = 5000000 * 0.1;
		document.getElementById('dd').textContent = 10000000 * 0.15;
		document.getElementById('ee').textContent = (taxIncomeTotal - 20000000) * 0.20;
		document.getElementById('a').textContent = 2000000;
		document.getElementById('b').textContent = 3000000;
		document.getElementById('c').textContent = 5000000;
		document.getElementById('d').textContent = 10000000;
		document.getElementById('e').textContent = taxIncomeTotal - 20000000;

	}
	else if (taxIncomeTotal > 30000000) {
		result = ((taxIncomeTotal - 30000000) * 0.25) + (3000000 * 0.05) + (5000000 * 0.1) + (10000000 * 0.15) + (10000000 * 0.20);
		document.getElementById('bb').textContent = (3000000) * 0.05;
		document.getElementById('cc').textContent = 5000000 * 0.1;
		document.getElementById('dd').textContent = 10000000 * 0.15;
		document.getElementById('ee').textContent = 10000000 * 0.2;
		document.getElementById('ff').textContent = (taxIncomeTotal - 30000000) * 0.25;
		document.getElementById('a').textContent = 2000000;
		document.getElementById('b').textContent = 3000000;
		document.getElementById('c').textContent = 5000000;
		document.getElementById('d').textContent = 10000000;
		document.getElementById('e').textContent = 10000000;
		document.getElementById('f').textContent = taxIncomeTotal - 30000000;
	}
	var texpermonth = parseInt(result / 12);
	document.getElementById('result').textContent = result;
	document.getElementById('amt1').textContent = monthly;
	document.getElementById('amt2').textContent = annual;
	document.getElementById('amt3').textContent = personal;
	document.getElementById('amt4').textContent = parent;
	document.getElementById('amt5').textContent = spouseRelif;
	document.getElementById('amt6').textContent = childRelif;
	document.getElementById('amt7').textContent = other;
	document.getElementById('amt8').textContent = taxIncomeTotal;
	document.getElementById('amt9').textContent = result;
	document.getElementById('amt10').textContent = texpermonth;

	showhide();
} 

function showhide(){
	$('#resulttable').show();
	$('#resulttable1').show();
	$('#input').hide();
	$('#btn1').show()
}
$('#btn1').click(function(){
	$(this).hide();
	$('#resulttable').hide();
	$('#resulttable1').hide();
	$('#input').show();
});