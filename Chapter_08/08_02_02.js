var redis = require("redis"),
   client = redis.createClient( 6379 , '10.10.10.10' );
   client.auth("password");
client.on("subscribe", (channel, message)=>{
   console.log("client subscribe channel " + channel );
});
client.on("message", (channel, message)=>{
   console.log("client message channel " + channel + ": " + message);
});
client.subscribe("pushnoti");
