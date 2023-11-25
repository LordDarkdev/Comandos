module.exports = [{
name: "atm",
aliases: ['bal', 'money', 'dinheiro', 'saldo'],
$if: "old",
code: `
$if[$mentioned[1]==]
💸 | <@$authorID> Você tem **$numberSeparator[$getGlobalUserVar[$get[money];$authorID]] Coins **, atualmente você está na posição **#$getLeaderboardinfo[$get[money];$authorID;globalUser;top]] ** Do rank.
$else
💸 | <@$mentioned[1]> Tem **$numberSeparator[$getGlobalUserVar[$get[money];$mentioned[1]]] Coins **, atualmente está na posição **#$getLeaderboardinfo[$get[money];$mentioned[1];globalUser;top]] ** Do rank.

$let[money;SUA VAR DE DINHEIRO]
`
}] 
