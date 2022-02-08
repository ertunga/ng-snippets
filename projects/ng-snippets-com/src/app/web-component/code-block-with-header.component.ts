import { LitElement, html } from "lit";
import {customElement, property} from 'lit/decorators.js';

@customElement('code-block-with-header')
export class CodeBlockWithHeaderComponent extends LitElement {

	@property() fileName = '';

	copy(): void {
		if (this.shadowRoot) {
			const slot = this.shadowRoot.querySelector('slot');
			if (slot) {
				const el = slot.assignedElements({flatten: true});
				// @ts-ignore
				console.log(el[0].querySelector('code').innerText);
			}
		}
	}

	// @ts-ignore
	render(): any {
		return html`
			<div style="background-color: #70cff8">
				<h2>${this.fileName}</h2>
				<button @click=${this.copy}>copy</button>
			</div>
			
			<div>
				<slot></slot>
			</div>
		`;
	}
}
