// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);

client.on("ready", () => {
	function status() {
  
	  let count = 0;
	  const gGuild = client.guilds.cache.get("920729897515753542")
	  const voiceChannels = gGuild.channels.cache.filter(c => c.type === 'voice');
	  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  
	  let go = [`${gGuild.memberCount} Members`, `${gGuild.name}`, `${count} Active Mics`]
	  let plsc = ["WATCHING", "COMPETING", "LISTENING"]
	  let Power = Math.floor(Math.random() * go.length);
  
	  client.user.setActivity(go[Power], { type: plsc[Power] });
	}; setInterval(status, 5000)
  
	client.user.setPresence({
	  status: 'dnd',
	})
  });

  client.on('ready', () => {
	console.log(``);
	setInterval(() => {
		  const channel = client.channels.cache.get("934908970156572722");
		  if (!channel) return console.error("Channeli Vojod Nadarad");
		  channel.join().then(connection => {
			  console.log("");
			 connection.voice.setSelfDeaf(true)
			   //connection.voice.setSelfMute(true);
		  }).catch(e => {
	
			  console.error(e);
		  })
	  }, 5000); 
	});

	const srza = require('discord.js');
	srza.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"
	
	client.on("ready", () => {
	  function sobhan() {
			let vazyiat = ["dnd", "idle","online"] // online | dnd | idle | offline
			let godrat = Math.floor(Math.random() * vazyiat.length)
			client.user.setPresence({
			status: vazyiat[godrat] })
	  }; setInterval(sobhan, 3000)
	});

	client.on("message", async (message)=> {
		if (message.channel.id === "934908987147694080"){
		  message.member.setNickname(message.content,"EROR")
		  message.delete()
		  message.channel.send("nik name change shod").then(msg=> msg.delete({timeout: "7000", reason: "Nothing"}))
		}
	  })
