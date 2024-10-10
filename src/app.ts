import fastify from 'fastify';
import {render} from '@lit-labs/ssr';
import {RenderResultReadable} from '@lit-labs/ssr/lib/render-result-readable.js';
import {html} from 'lit-html';

const app = fastify();

const helloTemplate = (name: string) => html`<div>Hello ${name}!</div>`;

app.get('/steve', async (request, reply) => {
    const result = render(helloTemplate('Stevee'));
    reply.type('text/html').send(new RenderResultReadable(result));
});

app.get('/john', async (request, reply) => {
    const result = render(helloTemplate('John'));
    reply.type('text/html').send(new RenderResultReadable(result));
});


export default app;
