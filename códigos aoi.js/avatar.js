
module.exports = [{
	name: "avatar",
	aliases: "av",
	code: `
$reply
$title[$username[$get[user]]]
$image[$userAvatar[$get[user]]
$description[[baixar]($userAvatar[$get[user]])]
$let[user;$findUser[$message[1;true]]]
$color[#ff0000]
	$footer[Requisitado por $username;$authorAvatar]
	$addTimestamp
`


	
}] 
 
