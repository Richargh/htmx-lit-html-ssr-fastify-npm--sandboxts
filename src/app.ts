import fastify from 'fastify';
import { fastifyStatic } from '@fastify/static';
import {render} from '@lit-labs/ssr';
import {RenderResultReadable} from '@lit-labs/ssr/lib/render-result-readable.js';
import {html} from 'lit-html';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`Dirname ${__dirname}`);

const app = fastify();

const helloTemplate = (name: string) => html`
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
        </main>
        </body>
    </html>
`;

app.register(fastifyStatic, {
    root: path.join(__dirname, 'public'),
    prefix: '/public/', // optional: default '/'
    constraints: { } // optional: default {}
})

app.get('/steve', async (request, reply) => {
    const result = render(helloTemplate('Stevee'));
    reply.type('text/html').send(new RenderResultReadable(result));
});

app.get('/john', async (request, reply) => {
    const result = render(helloTemplate('John'));
    reply.type('text/html').send(new RenderResultReadable(result));
});


export default app;
