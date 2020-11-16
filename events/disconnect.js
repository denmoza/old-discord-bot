module.exports = client => {
	var shardd = client.shard.id +1;
	console.log(`You have been disconnected at ${new Date()}`);
	client.channels.get('327014842932396032').send(`I have been disconnected from the Discord Gateway at ${new Date()}. Shard ${shardd}`);
};	