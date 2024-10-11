import fastify from 'fastify';
import { fastifyStatic } from '@fastify/static';
import { fastifyFormbody } from '@fastify/formbody';
import {render} from '@lit-labs/ssr';
import {RenderResultReadable} from '@lit-labs/ssr/lib/render-result-readable.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {helloTemplate} from "./templates/hello.template.js";
import {clickedFragment} from "./templates/clicked.fragment.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`Dirname ${__dirname}`);

const app = fastify();

app.register(fastifyStatic, {
    root: path.join(__dirname, 'public'),
    prefix: '/public/', // optional: default '/'
    constraints: { } // optional: default {}
});

app.register(fastifyFormbody);

app.get('/steve', async (request, reply) => {
    const result = render(helloTemplate('Stevee'));
    reply.type('text/html').send(new RenderResultReadable(result));
});

app.get('/john', async (request, reply) => {
    const result = render(helloTemplate('John'));
    reply.type('text/html').send(new RenderResultReadable(result));
});

let clickCounter = 0;

app.post('/clicked', async (request, reply) => {
    const result = render(clickedFragment(++clickCounter));
    reply.type('text/html').send(new RenderResultReadable(result));
});

export default app;
