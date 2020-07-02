## first pass
arr[] = {8,  4,  23, 42, 16, 15}
Indexes:  0   1   2   3   4   5   

left = 0, right =  5, pivot = 15
Initialize index of smaller element, i = -1

Traverse elements from j = left to right-1
j = 0 : Since arr[j] <= pivot, do i++ and swap(arr[i], arr[j])
i = 0 
arr[] =[8,4,23,42,16,15] // No change as i and j 
                                     // are same

j = 1 : Since arr[j] < pivot, do i++ and swap(arr[i], arr[j])
i=1
arr[] =[8,4,23,42,16,15]

j = 2 : Since arr[j] > pivot,  Since arr[j] > pivot, do nothing
// No change in i and arr[]

j = 3 : Since arr[j] > pivot, do nothing
// No change in i and arr[]

j = 4 : Since arr[j] > pivot, do nothing
// No change in i and arr[]


We come out of loop because j is now equal to right-1.
Finally we place pivot at correct position by swapping
arr[i+1] and arr[right] (or pivot) 
arr[] = [8,4,15,42,16,23]

## second pass
**then the left quick sort :**
sort the [8,4,15]
pivot = 15 ==> no change 
then pivot =4 ==> swip 8 , 4 ==> [4,8,15]
the result 
arr=[4,8,15,42,16,23]

## third pass
**then the right quick sort :**
sort the [42,16,23]
pivot = 23 
then pivot = 16
then pivot = 42

arr= [4,8,15,16,23,42]




