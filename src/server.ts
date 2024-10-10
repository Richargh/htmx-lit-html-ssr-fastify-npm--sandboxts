import app from './app.js';

const start = async () => {
    try {
        await app.listen({ port: 8080 });
        console.log('Server is running on http://localhost:8080');
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

void start();
