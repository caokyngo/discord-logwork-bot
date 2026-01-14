const { Client, GatewayIntentBits } = require("discord.js");
const cron = require("node-cron");

const TOKEN = process.env.BOT_TOKEN;
const CHANNEL_ID = process.env.CHANNEL_ID;

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log(`🤖 Logged in as ${client.user.tag}`);

  cron.schedule(
    "0 18 * * 5",
    async () => {
      try {
        const channel = await client.channels.fetch(CHANNEL_ID);
        if (channel) {
          channel.send("📌 Mọi người cập nhật logwork");
        }
      } catch (err) {
        console.error("Send message error:", err);
      }
    },
    {
      timezone: "Asia/Ho_Chi_Minh"
    }
  );
});

client.login(TOKEN);
