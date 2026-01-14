const { Client, GatewayIntentBits } = require("discord.js");
const cron = require("node-cron");

const TOKEN = "MTQ2MDg0NDI4MzgyODYzMzY0Mg.GH_AKZ.ggtRc9IfMpy-ChkmWVl_ATPFx5uA_FwUjlQdrk";
const CHANNEL_ID = "1460848936301367328";

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log(`Bot logged in as ${client.user.tag}`);

  cron.schedule(
    "0 18 * * 5",
    async () => {
      const channel = await client.channels.fetch(CHANNEL_ID);
      if (channel) {
        channel.send("📌 Mọi người cập nhật logwork");
      }
    },
    {
      timezone: "Asia/Ho_Chi_Minh"
    }
  );
});

client.login(TOKEN);
