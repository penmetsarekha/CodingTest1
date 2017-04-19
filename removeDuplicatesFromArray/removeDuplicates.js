/**
 * Created by rekhapenmetsa on 4/14/17.
 */
function removeDuplicates(Arr){
    var tempObj={};
    //taking a temporary object to store the array values as keys in object,the duplicate keys are overwritten.
    var j=0;
    for( var i=0;i<Arr.length;i++)
    {
        tempObj[Arr[i]]=j;
        j++;
    }
    console.log(tempObj);
    var finalArr=[];
    for(var key in tempObj)
        finalArr.push(key);
    return finalArr;
}
var x=removeDuplicates([1,5,7,3,5,3,9,1]);
console.log(x);


