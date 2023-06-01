import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('notes')
export class AppSettings extends LitElement {
    static styles = [
        css`
        #infoCard {
          padding: 18px;
          padding-top: 0px;

        }

        sl-card::part(footer) {
          display: flex;
          justify-content: flex-end;
        }

        `
    ];

    render() {
        return html`
          <HTML >
            <main>
              <div>
              <sl-card id="infoCard">
                <p>

                  kemo!!
                </p>
              </div>
            </main>
        `;
    }
}
