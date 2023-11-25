module.exports ={
  name: "pay",
  aliases: ['pagar'],
  code: `$title[1;**\🔷 Pagamento feito com sucesso!**]
$color[1;#ff0000]
$description[1;
$userTag[$authorID] pagou ao usuário <@$mentioned[1]> a quantia de $get[valor]R#CHAR#]
$setGlobalUserVar[$get[money];$sum[$getGlobalUserVar[$get[money];$mentioned[1]];$get[valor]];$mentioned[1]]
$setGlobalUserVar[$get[money];$sub[$getGlobalUserVar[$get[money];$authorID];$get[valor]];$authorID]
$onlyIf[$getGlobalUserVar[$get[money];$authorID]>$get[valor];**\❌ Você não tem esse valor a ser pago!**]
$onlyIf[$isNumber[$get[valor]]==true;**\❌ Use apenas números!**]
$onlyIf[$checkContains[$get[valor];NaN;Infinity;-Infinity;Inf]==false;**\❌ Use apenas números!**]
$onlyIf[$mentioned[1]!=$authorID;**\❌ Mencione algum usuário válido!**]
$onlyIf[$mentioned[1]!=undefined;**\❌ Modo de uso: \`(prefixo)pay (usuário) (valor)\`**]
$let[valor;$replaceText[$replaceText[$replaceText[$replaceText[$noMentionMessage;all;$getGlobalUserVar[$get[money];$authorID]];k;000];m;000000];b;000000000]]
$onlyIf[$isNumber[$splitText[1]]==true;**\❌ Use apenas números!**]
$textSplit[$noMentionMessage;]
$let[money;SUA VAR DE DINHEIRO AQ]
`
} 
