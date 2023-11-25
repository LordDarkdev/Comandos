const id = "id do seu canal de logs";
const link = "link do server do seu bot aq";
module.exports = {
name: "reportar-bug",
aliases: ["rb","reportbug","bug"], // deixe se quiser.
code: `
$sendMessage[$reply {newEmbed: {description: <@$authorID>, seu bug foi reportado com sucesso.
[Entre em contato com meu suporte\](${link});no]
$channelSendMessage[${id};{newEmbed: {author: $userTag[$authorID]:$authorAvatar}
{title: Aparentemente alguém reportou um bug!}
{color: RANDOM}
{description: Informações do bug;
Bug: \`$message\`
Usuário: \`$username[$authorID]\`
Servidor: \`[$serverName[$guildID]\]($getServerInvite)\`}
{addtimestamp}};no]
$onlyIf[$message!=;❌ | Adicione um motivo!]
`
} 
