const inputs = document.querySelectorAll("input");
const outputs = document.querySelectorAll("output");
const starterFeeding = document.querySelector(".starter-container");

backCalc();
calc();

const form = document.querySelector("form");
form.addEventListener("input", (e) => {
	if (e.target.parentNode.className == "starter") {
		starterHydrationCalc();
	} else if ([...e.target.classList].includes("percent")) {
		backCalc();
	}
	console.log([...e.target.classList]);
	calc();
});

inputs[3].addEventListener("click", (e) => {
	starterFeeding.classList.toggle("invisible");
	console.log("click");
});

function calc() {
	const hydration = [inputs[2].value / 100, inputs[3].value / 100];
	const masses = [inputs[4].value, inputs[5].value, inputs[6].value];
	outputs[0].innerHTML = Math.round(
		(masses[0] / (hydration[0] + 1)) * (hydration[1] + 1),
	);
	outputs[1].innerHTML = masses[1];
	outputs[2].innerHTML = Math.round(
		masses[2] -
			((hydration[1] - hydration[0]) * masses[0]) / (hydration[0] + 1),
	);
	console.log("test");
}

function starterHydrationCalc() {
	const starterHydration = [inputs[0], inputs[1]];
	inputs[3].value = Math.round(
		(starterHydration[1].valueAsNumber / starterHydration[0].valueAsNumber) *
			100,
	);
}

function backCalc() {
	inputs[0].value = "100";
	inputs[1].value = inputs[3].value;
}
