let handler = async (m, { conn, text }) => {
    if (!text) throw 'Who wants to be premium ?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag??'
    let users = global.db.data.users
    users[who].premium = true
    users[who].premiumTime = 2592000
    conn.reply(m.chat, 'Done!', m)
}
handler.help = ['addprem']
handler.tags = ['owner']
handler.command = /^addprem(user)?$/i
handler.rowner = true

export default handler