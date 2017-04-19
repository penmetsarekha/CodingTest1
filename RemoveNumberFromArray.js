/**
 * Created by rekhapenmetsa on 4/19/17.
 */
var array=[1,2,3,4,5,6,7,8,9,5,10];
var n=5;
var length=array.length;
for(var i=0;i<length;i++)
{
    if(array[i]==n)
        array.splice(i,1)
}

console.log(array);
console.log("length of array "+array.length);