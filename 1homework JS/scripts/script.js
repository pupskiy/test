"use strict";

let money, time;

function start () {
	money = +prompt("Ваш бюджет на месяц?", "");
	time = prompt("Введите дату в формате YYYY-MM-DD", "");
	
	while (isNaN(money) || money == null || money == "") {
		money = +prompt("Ваш бюджет на месяц?", "");
	}
}
start();


let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

function chooseExpenses () {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
			
		if ( (typeof(a)) === "string" && typeof(a) != null && typeof(b) != null 
			&& a != '' && b != '' && a.length < 20) {
			console.log("done");
			appData.expenses[a] = b;
		} else {
			i = i - 1;
		}
		
	}
}
chooseExpenses();

function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed(); 
	alert ("Ваш бюджет на один день составляет: " + appData.moneyPerDay + "руб.")
}
detectDayBudget();

function detectLevel () {
	if (appData.moneyPerDay < 100) {
		console.log("Минимальный уровень достатка :(");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log("Средний уровень достатка :|");
	} else if (appData.moneyPerDay > 2000) {
		console.log("Высокий уровень достатка :)");
	} else {
		console.log("Что то пошло не так!")
	}
}
detectLevel();




function checkSavings () {
	let askSavings = confirm("Делаете ли вы накопления?");
	if (askSavings == true) {
		let save = +prompt("Какова сума накоплений?"),
			percent = +prompt("под какой процент?");
		
			appData.monthIncome = (save/100/12*percent).toFixed();
			alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
	} else {
		alert("Попробуйте сделать накопления, вам потом будет легче!")
	}
}
checkSavings();

function chooseOptExpenses () {
	for (let i = 1; i <= 3; i++) {
		let x = prompt("Статья необязательных расходов?");

		if ( typeof(x) === "string" && typeof(x) != null && x != '' && 
		x.length < 20 && typeof(x) !== "number") {
			appData.optionalExpenses[i] = x;
			console.log(appData.optionalExpenses); 
		} else { 
			i = i - 1;
		}

	}
}
chooseOptExpenses();