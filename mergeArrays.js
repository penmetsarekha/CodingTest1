/**
 * Created by rekhapenmetsa on 4/14/17.
 */
function mergeArrays(arr1,arr2)
{

    var length=arr1.length;
    for(i=0;i<arr2.length;i++){
        arr1[length+i]=arr2[i];
    }

    return arr1;

}


console.log(mergeArrays([1,2,3,4],[4,3,5,6,7]));