const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    return;
  }
  const pesan = args.join` `;
  const colombia = `𝙼𝙴𝙽𝚂𝙰𝙹𝙴:  ${pesan}`;
  let teks = `❄🎅🏻𝙰𝙲𝚃𝙸𝚅𝙴𝙽𝚂𝙴 𝙱𝙾𝚃𝚂 𝙻𝙴𝚂 𝙷𝙰𝙱𝙻𝙰 𝚂𝙰𝙽𝚃𝙰 𝙲𝙻𝙰𝚄𝚂🎅🏻❄\n${colombia}\n\n❄𝙱𝙾𝚃𝚂:❄\\n`;
  for (const mem of participants) {
    teks += `❄ @${mem.id.split('@')[0]}\n`;
  }
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall *<mesaje>*', 'invocar *<mesaje>*'];
handler.tags = ['grupo'];
handler.command = ['tagall', 'todos'];
handler.admin = true;
handler.group = true;
export default handler;