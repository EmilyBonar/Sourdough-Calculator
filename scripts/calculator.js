const inputs = document.querySelectorAll("input");
const outputs = document.querySelectorAll("output");

calc();

const form = document.querySelector("form");
form.addEventListener("input", (e) => {
	calc();
});

function calc() {
	const hydration = [inputs[0].value / 100, inputs[1].value / 100];
	const masses = [inputs[2].value, inputs[3].value, inputs[4].value];

	outputs[0].innerHTML = Math.round(
		(masses[0] / (hydration[0] + 1)) * (hydration[1] + 1),
	);
	outputs[1].innerHTML = masses[1];
	outputs[2].innerHTML = Math.round(
		masses[2] -
			((hydration[1] - hydration[0]) * masses[0]) / (hydration[0] + 1),
	);
}
