import { html, css, LitElement } from "lit";

export class SimpleGreeting extends LitElement {
	static styles = css`
		h1 {
			text-align: center;
		}
	`;

	static properties = {
		name: { type: String }
	};

	constructor() {
		super();
		this.name = "World";
	}

	render() {
		return html`<h1>Hello, ${this.name}!</h1>`;
	}
}
customElements.define("simple-greeting", SimpleGreeting);
