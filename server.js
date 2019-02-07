const Hapi = require('hapi');

const server = Hapi.server({
  port: process.env.PORT || 3000
});

process.env.SIMPLE_ADMIN_SECRET_KEY = 'YOU_SECRET_KEY'

const db = require('./models/index');
const simpleadmin = require('simpleadmin');

db.models = { Post: db.post, User: db.user };

server.route({
  method: 'GET',
  path: '/',
  handler: function(request, h) {
    return 'Hello world!'
  }
})

simpleadmin.mountSimpleAdmin(server, db)

const start = async function() {
  try {
    await server.start();
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
};

start();
