import {html} from "lit-html";

export const clickedFragment = (clickCounter: number) => html`
        <div>I was clicked ${clickCounter} times</div>
`;