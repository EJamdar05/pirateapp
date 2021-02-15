PHRASES = [["hello", "ahoy"], ["hi", "yo-ho-ho"], ["pardon me", "avast"], 
["excuse me", "arrr"], 
["my", "me"], ["friend", "me bucko"], ["sir", "matey"], 
["madam", "proud beauty"], ["miss", "comely wench"], 
["stranger", "scurvy dog"], ["officer", "foul blaggart"], 
["where", "whar"], ["is", "be"], ["the", "th'"], ["you", "ye"],
["tell", "be tellin'"], ["know", "be knowin'"],
["how far", "how many leagues"], ["old", "barnacle-covered"],
["attractive", "comely"], ["happy", "grog-filled"], 
["nearby", "broadside"], ["restroom", "head"], ["restaurant", "galley"],
["hotel", "fleabag inn"], ["pub", "Skull & Scuppers"],
["bank", "buried trasure"], ["fight", "duel"], ["gun", "sword"],
["money", "me riches"], ["resign", "walk the plank"]
];
 
function Capitalize(str)
// Returns: a copy of str with the first letter capitalized
{
return str.charAt(0).toUpperCase() + str.substring(1);
}

function Translate(text)
// Returns: a copy of text with English phrases replaced by piratey equivalemts 
{
    for (var i = 0; i < PHRASES.length; i++) {
        var toReplace = new RegExp("\\b"+PHRASES[i][0]+"\\b", "i");
        
        var index = text.search(toReplace);
        while (index != -1) {
           if (text.charAt(index) >= "A" && text.charAt(index) <= "Z") {
               text = text.replace(toReplace, Capitalize(PHRASES[i][1]));
           } 
           else {
               text = text.replace(toReplace, PHRASES[i][1]);
           }
           index = text.search(toReplace);
        }
    }
    return text;
}

let input = document.getElementById('generate');
input.addEventListener('click', performAction);

function performAction(event){
    let userString = document.getElementById('text-input').value;
    let translation = Translate(userString);
    console.log(translation);
    document.getElementById('results').innerHTML = translation;
    document.getElementById("results").style.backgroundColor = "burlywood";
    document.getElementById("results").style.border = "5px dashed brown";
}

