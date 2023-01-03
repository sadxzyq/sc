let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Sukses Menghidupkan 𝘼𝙆 𝙀𝙉𝙏𝙀𝙍𝙏𝘼𝙄𝙉𝙈𝙀𝙉𝙏 🤖* ')
}


handler.tags = ['owner']
handler.command = /^(boton)$/i

handler.group = true
handler.admin = true

export default handler
