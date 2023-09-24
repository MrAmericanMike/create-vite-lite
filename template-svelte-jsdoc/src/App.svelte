<script>
	import "./global.css";

	/**
	 * Adds 2 numbers
	 * @param {number} a First number
	 * @param {number} b Second number
	 * @returns {number}
	 */
	function addNumbersJSDoc(a, b) {
		return a + b;
	}

	/** @type {(a: number, b:number) => number} */
	function addNumbers(a, b) {
		return a + b;
	}
</script>

<main>
	<h1>Vite Svelte JSDOC</h1>
	<h2>{addNumbersJSDoc(5, 5)}</h2>
	<h2>{addNumbers(5, 5)}</h2>
</main>

<style>
	h1,
	h2 {
		text-align: center;
	}
</style>
