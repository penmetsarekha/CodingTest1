/**
 * Created by rekhapenmetsa on 4/12/17.
 */
function fibonnoci(n)
{
    var arr =[0,1];
    if(n==1) return 0;
    else if (n==2) return arr;
    else {
        for (var i = 2; i <= n; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];
            //arr.push(arr[i]);
        }
        return arr;
    }
}
console.log(fibonnoci(6));