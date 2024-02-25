const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("exit")
    .setDescription("Exits the Voice channal."),
  execute: async ({ client, interaction }) => {
    const queue = client.player.getQueue(interaction.guild);

    if (!queue) {
      await interaction.reply("There are no songs playing.");
      return;
    }

    const currentSong = queue.current;

    queue.destroy();

    await interaction.reply("Why you bully me?");
  },
};
