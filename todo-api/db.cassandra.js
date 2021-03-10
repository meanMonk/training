const cassandra = require('cassandra-driver');
const contactPoints = ['127.0.0.1:4095'];
const authProvider = new cassandra.auth.PlainTextAuthProvider('Username','password');

const client = new cassandra.Client({
    contactPoints: contactPoints,
    localDataCenter: 'datacenter1',
    keyspace: 'grocery',
    authProvider: authProvider
});


client.on('log',(level,loggerName,message,furtherInfo) => {
    console.log(`${level} - ${loggerName}:  ${message}`);
});


module.exports = client