
/**
 * Created by rekhapenmetsa on 3/15/17.
 * Write a Java program to find the second largest element in an array.
 Example

 Input  = {12, 34, 45, 9, 90, 90, 3}
 */
var arr=[12,34,45,9,8,90,3];
var max=arr[0];
var secondMax=arr[0];
for(var i=0;i<arr.length;i++)
{
    if(arr[i]> max) {
        secondMax=max;
        max = arr[i];
    }
    else if (arr[i]>secondMax)
    {
        secondMax=arr[i];
    }

}

/*for(var j=0;j<arr.length;j++)
{
    if (arr[j]>secondMax && arr[j]<max) secondMax=arr[j];
}*/

console.log(max);
console.log(secondMax);