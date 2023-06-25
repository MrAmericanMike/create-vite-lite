import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("simple-greeting")
export class SimpleGreeting extends LitElement {
	static styles = css`
		h1 {
			text-align: center;
		}
	`;

	@property()
	name = "World";

	render() {
		return html`<h1>Hello, ${this.name}!</h1>`;
	}
}
