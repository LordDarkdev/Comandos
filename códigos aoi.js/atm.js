module.exports = [{
name: "atm",
aliases: ['bal', 'money', 'dinheiro', 'saldo'],
code: `
💸 | <@$authorID> Você tem **$numberSeparator[$getGlobalUserVar[$get[money];$authorID]] Coins **, atualmente você está na posição **#$getLeaderboardinfo[$get[money];$authorID;globalUser;top]] ** Do rank.
$let[money;SUA VAR DE DINHEIRO]
`
}] 
