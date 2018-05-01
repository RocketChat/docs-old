//rocket.service.js
var Service = require('node-windows').Service;
var EventLogger = require('node-windows').EventLogger;

var logger = new EventLogger('Rocket.Chat');

// Create a new service object
var svc = new Service({
  name:'Rocket.Chat',
  description: 'Rocket.Chat Service',
  script: process.env["SCRIPT_PATH"],
  env: [{
    name: "PORT",
    value: process.env["PORT"]
  },
  {
    name: "ROOT_URL",
    value: process.env["ROOT_URL"]
  },
  {
    name: "MONGO_URL",
    value: process.env["MONGO_URL"]
  },
  {
    name: "MONGO_OPLOG_URL",
    value: process.env["MONGO_OPLOG_URL"]
  }]
});

var log = function(message){
    console.log(message);
    logger.info(message);
};

var warn = function(message){
    console.warn(message);
    logger.warn(message);
};

var error = function(message){
    console.error(message);
    logger.error(message);
};

svc.on('install',function(){
  if(process.env["MONGO_OPLOG_URL"] == null)
  {

  }
  else if(process.env["MONGO_OPLOG_URL"] == null)
  {

  }
  else if(process.env["MONGO_OPLOG_URL"] == null)
  {

  }
  else if(process.env["MONGO_OPLOG_URL"] == null)
  {

  }
  else if(process.env["MONGO_OPLOG_URL"] == null)
  {

  }
  else
  {
      log('Install complete!');
      svc.start();
  }
});

svc.on('uninstall',function(){
  log((svc.exists)
    ? error("Error. The Rocket.Chat service still exists.")
    : log('Uninstall complete.'));
});

svc.on('start',function(){
  log('The Rocket.Chat service is starting...');
});

svc.on('stop',function(){
  warn('The Rocket.Chat service has stopped.');
});

svc.on('error',function(){
  error('Error. Something went wrong...');
});

svc.on('alreadyinstalled',function(){
  log('The Rocket.Chat service has already been installed.');
});

svc.on('invalidinstallation',function(){
  error('Unable to install the Rocket.Chat service. Something is wrong with the data provided.');
});

var command = (process.argv.length > 2) ? process.argv[2] : null;

var doCommand = function()
{
    switch(command)
    {
        case 'install':
            log('Attempting to create the Rocket.Chat service...');
            svc.install();
            break;

        case 'uninstall':
            log('Attempting to remove the Rocket.Chat service...');
            svc.uninstall();
            break;

        case 'start':
            log('Attempting to start the Rocket.Chat service...');
            svc.start();

        case 'stop':
            log('Attempting to stop the Rocket.Chat service...');
            svc.stop();
            break;

        default:
            console.error('Error. Unknown command!');
            break;
    }
}

var varsAreSpecified = function()
{
  var result = true;

  var requiredVars = [ 'PORT', 'ROOT_URL', 'MONGO_URL', 'MONGO_OPLOG_URL', 'SCRIPT_PATH' ];

  for(var x =0; x < requiredVars.length; x++)
  {
      var required = requiredVars[x];
	  
      if(process.env[required] == null)
      {
          error('Error. '+ required +' was not defined!');

          result = false;

          x = requiredVars.length;
      }
  }

  return result;
}

if(command == 'stop' || command == 'uninstall' || varsAreSpecified())
{
    doCommand();
}