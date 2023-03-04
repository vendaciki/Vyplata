/*
Vytvořte funkci salary se třemi parametry

wage - hrubá mzda v korunách za hodinu
hours - kolik hodin denně průměrně pracujete
days - kolik dní v měsící průměrně pracujete
Funkce spočítá vaši hrubou měsíční mzdu v celých korunách.

Dále vytvořte funkci taxed, která na vstupu obdrží částku a procento zdanění, a vrátí částku v celých korunách zdaněnou podle zadaných procent.

Použítím funkcí salary a taxed spočítejte svoji měsíční mzdu po 15% zdanění.
*/


const salary = (wage,hours,days) => {
	return Math.round(wage*hours*days)
}

const taxed = (salary,taxPercentage) => {
	return Math.round((salary*(100-taxPercentage))/100)
}

const wage = 200
const hours = 8
const days = 21
const hrubaMzda = salary(wage,hours,days)
const cistaMzda = taxed(hrubaMzda,15)

document.body.innerHTML = 
	`<p>Kč/hod: ${wage} Kč</p>
	<p>Hod/den: ${hours}</p>
	<p>Odpracovaných dní: ${days}</p>
	<p>Hrubá mzda: ${hrubaMzda} Kč</p>
	<p>Čistá mzda: ${cistaMzda} Kč</p>`

