
module.exports = {
name: "daily" ,
code: `
$title[1;🎁 | Prêmio diário coletado com sucesso!]
$color[1;fffff]
$description[1;
<@$authorID>
💰 | Você Recebeu R$$random[5000;15000] hoje!
🕛 | Volte em 24h para pegar seu prêmio diário novamente.
💼 | Digite <prefixo> atm para visualizar o seu saldo!]
$setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$random[5000;15000]];$authorID]
$cooldown[24h;❌ | Você precisa esperar %time% para pegar seu prêmio diário novamente]
`
} 
