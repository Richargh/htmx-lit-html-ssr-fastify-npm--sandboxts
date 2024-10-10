import app from '../src/app.js';
import { test, expect } from 'vitest';

test('GET /steve should return status OK', async () => {
    const response = await app.inject({
        method: 'GET',
        url: '/steve'
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual('Hello Steve!');
});
