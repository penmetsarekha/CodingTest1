/**
 * Created by rekhapenmetsa on 3/17/17.
 */
var arr=[4,9,10,20,8,9];
function BubbleSort(arr) {
    var i, j, lim;
    var lim = arr.length;
    while (lim--) {
        for (i = 0, j = 1; i < lim; i++, j++) {

            if (arr[i] > arr[j]) {
                var temp;
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

            }
        }
    }
    return arr;
}
console.log(BubbleSort(arr));