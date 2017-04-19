/**
 * Created by rekhapenmetsa on 4/19/17.
 */
function palindrome(str){
    var length=str.length;
    for(var i=0;i<length/2;i++)
    {
if(str[i]!==str[length-1-i])
return false;
    }
    return true;
}
if(palindrome('mame')) console.log("Is Panlindrome")
else console.log("Not Palindrome");

