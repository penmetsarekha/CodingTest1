/**
 * Created by rekhapenmetsa on 4/19/17.
 */
var str=["bat", "tab", "cat"];
var length=str.length;
for(var i=0;i<length;i++)
{
    for(j=0;j<length;j++)
    {
      var strFinal=str[i]+str[j];
      if(palindrome(strFinal))
      {
          console.log(i,j,strFinal);
      }

    }
}

function palindrome(str)
{
    var length=str.length;
    for(var i=0;i<length/2;i++)
    {
        if(str[i]!==str[length-1-i])
            return false;

    }
    return true;
}
