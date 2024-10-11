#!/usr/bin/env node

import {cpSync, rmSync} from 'node:fs';
import {resolve} from 'node:path';

const args = process.argv.slice(2); // first args is node location, second is script location
const [destination] = args;


if (destination == null) {
    console.error('Missing arguments!');
    console.error('Usage: node distribute-public.mjs <destination>');
    process.exit(1);
}

function main() {
    console.log(`Distributing assets to ${destination}`);
    distributeHtmx()
    distributePico()
}

function distributeHtmx() {
    console.log(`Distributing Htmx`);
    cpSync('node_modules/htmx.org/dist/htmx.min.js', resolve(destination, 'htmx.min.js'));
}

function distributePico() {
    console.log(`Distributing Pico`);
    cpSync('node_modules/@picocss/pico/css/pico.classless.css', resolve(destination, 'pico.classless.css'));
}

main();
