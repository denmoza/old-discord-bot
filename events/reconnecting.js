module.exports = client => {
	var shardd = client.shard.id +1;
	console.log(`Reconnecting at ${new Date()}`);
	client.channels.get('327014842932396032').send(`I am reconnecting to Discord Gateway at ${new Date()}. Shard ${shardd}`);
};