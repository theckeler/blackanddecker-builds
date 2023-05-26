export default function selectChange(e, options) {
	if (e) {
		const optionTarget = document.querySelector(
			`#${e.currentTarget.value}-options`
		);
		for (let option of options) {
			const hideThem = document.querySelector(`#${option}-options`);
			if (hideThem !== null) {
				hideThem.classList.add("hidden");
			}
		}
		if (optionTarget !== null) {
			optionTarget.classList.remove("hidden");
		}
	}
}
