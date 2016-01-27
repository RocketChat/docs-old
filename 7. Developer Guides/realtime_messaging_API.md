Rocket.Chat's real time messaging API is a thin semantics layer on top of [Meteor's DDP](https://www.meteor.com/ddp).   To access Rocket.Chat's internal message streaming firehose directly from an external client application:

```javascript
// Connect to Rocket.Chat via DDP
connection = DDP.connect('http://localhost:3000');

//// LISTEN EVENT
// Create a new collection to monitor typing events in remote connection
collection = new Meteor.Collection('stream-typing', connection);

// Subscribe to typing events
connection.subscribe('stream-typing');

// Handle events on add of collection and reserve an especial item of
// type subscriptionId to be used with Meteor Calls
collection.find({}).observe({
	added: function(item){
		if (item.type == 'subscriptionId') {
			window.subscriptionId = item._id;
		}
		console.log(item)
	}
});


//// EMIT EVENT
// Call stream on connection passing subscription id and arguments
// first argument must be event name, stream-typing is the stream name
connection.call('stream-typing', subscriptionId, ['typing', {room: 'GENERAL', username: 'rodrigo.rocket.team', start: true}]);
```
