import { LitElement, html, property, customElement, css } from 'lit-element';

@customElement('wc-app')
export class WcApp extends LitElement {
  static get styles() {
    return css`
      h1 {
        color: rgb(100% 0% 0% / 90%);

        & span {
          color: blue;
        }
      }
    `;
  }

  @property() message = 'world';

  render() {
    return html`
      <h1>hello <span>${this.message}</span></h1>
    `;
  }
}
