var redis = require("redis"),
   client = redis.createClient( 6379 , '10.10.10.10' );
   client.auth("password");
client.publish("pushnoti", "I am sending my last message.");
