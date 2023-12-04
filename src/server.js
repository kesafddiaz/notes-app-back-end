import hapi from '@hapi/hapi';
import routes from './routes.js';

const init = async () => {
  const server = hapi.server({
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    port: 5000,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  try {
    server.route(routes);
  } catch (err) {
    console.log(err.message);
  }
  await server.start();
  console.log('Server berjalan pada %s', server.info.uri);
};

init();
