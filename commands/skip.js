const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("skip")
    .setDescription("Skips the current song."),
  execute: async ({ client, interaction }) => {
    const queue = client.player.getQueue(interaction.guild);

    if (!queue) {
      await interaction.reply("There are no songs playing.");
      return;
    }

    const currentSong = queue.current;

    queue.skip();

    await interaction.reply({
      embeds: [
        new MessageEmbed()
          .setDescription(`Skipped **${currentSong.title}**`)
          .setColor(currentSong.thumbnail),
      ],
    });
  },
};
