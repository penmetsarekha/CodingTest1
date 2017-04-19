/**
 * Created by rekhapenmetsa on 3/17/17.
 */
var arr=[3,2,7,1,5,0,4];
function BubbleSort(arr)
{
    var length=arr.length;
    do {
    for(i=0;i<length-1;i++)
    {
       if(arr[i]>arr[i+1])
       {
           swap(arr,i,i+1);
       }
    }
    }while(length--);
    return arr;
}
console.log(BubbleSort(arr));
function swap(data,a,b)
{
    var temp=data[a];
    data[a]=data[b];
    data [b]=temp;
}