let handler = async (m, { conn }) => {


let krtu = `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Kelas      :* 
│ *Asal         :* 
│ *Agama    :* 
│ *Status     :* 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
create by 𝙳𝚊𝚛𝚔𝚡
`
conn.fakeReply(m.chat, krtu, '0@s.whatsapp.net', wm)
}
handler.command = /^(intro)$/i
handler.group = true

export default handler
