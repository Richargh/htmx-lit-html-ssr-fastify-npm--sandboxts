import {html} from "lit-html";

export const helloTemplate = (name: string) => html`
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Hello</title>
        <script src="/public/htmx.min.js"></script>
        <link rel="stylesheet" href="/public/pico.classless.css">
    </head>
        <body>
        <main>
            <h1>Hello</h1>
            <div>Hello ${name}!</div>

            <button hx-post="/clicked">
                Click Me
            </button>
        </main>
        </body>
    </html>
`;