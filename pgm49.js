arr=[10,11,12,3,2,4]
//(1) sort the given array in ascending order


//Algorithm
//get the search item
searchItem=2
//initialize lower index and upper index
low=0
up=arr.length-1
isPresent=false
//sort the given array
arr.sort((a,b)=>a-b)
console.log(arr);

//repeat the above statement until the low and up value meets.
while(low<=up) {//mid = low+up/2
    mid=Math.floor((low+up)/2)


    //- mid = search item
     // item found the display
    if(arr[mid]==searchItem){
    isPresent=true
    break
    }
    //-mid >searchitem
     // up=mid-1
    else if(arr[mid]>searchItem){
    up=mid-1
     }
    //-mid<search
    //low=mid1+1
    else{
    low=mid+1
   }

}

console.log(isPresent?`present` : `not present`);



