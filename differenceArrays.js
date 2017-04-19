/**
 * Created by rekhapenmetsa on 4/14/17.
 */
function differenceArrays(arr1,arr2)
{
    var newArray=[];
    //for merging two arrays into new array
    for(var i=0;i<arr1.length;i++)//iterate through array1
    {
       if (arr2.indexOf(arr1[i])===-1)//if array2 does not contain items in array 1.
       {
           newArray.push(arr1[i]);//add it to new array
       }
    }
    for(var j=0;j<arr2.length;j++)//iterate through array2
    {
        if(arr1.indexOf(arr2[j])===-1)//if array1 does not contain items in array 2.
        {
            newArray.push(arr2[j]);//add it to new array
        }
    }
    return newArray;
}
var x=differenceArrays([1,5,5,6,7,8],[3,5,7,9]);
console.log(x);