
module.exports = [{
name: "ping",
aliases: ['latência,latencia,pong'],
code: `

**[ 🏓 | Ping: \`$pingms\`**
**[ ⏰ | Tempo Online: <t:$truncate[$math[($datestamp-$uptime[ms])/1000]]:R>**
`
}] 
