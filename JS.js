// //  Find the length of an array without using .length.
// let arr=[1,2,3,4]
// let count=0
// while(arr[count]!=undefined){
//     count++
// }
// console.log(count)

// //  Add an element to an array without .push or .unshift.
// let ar=[1,2,3]
// let element=4
// let index=0
// while(ar[index]!=undefined){
//     index++
// }
// ar[index]=element
// console.log(ar)


// //  Remove the last element of an array without .pop.
// let c=[1,2,3,4]
// let k=[]
// let index=0
// while(c[index+1]!=undefined){
//     k[index]=c[index]
//     index++
// }
// c=k
// console.log(c)


// // Reverse an array without using built-in methods.
// let c=[1,2,3,4]
// let end=c.length-1
// for(let i =0;i<c.length/2;i++){
//     let temp=c[i]
//     c[i]=c[end]
//     c[end]=temp
//     end--
// }
// console.log(c)

// // Merge two arrays manually.
// let a=[1,2,3]
// let b=[4,5,6]
// let c=0
// let n=a.length+b.length
// for(let i=a.length;i<n;i++){
//     a[i]=b[c]
//     c++
// }
// console.log(a)

// //  Find if a given element exists in an array (no .includes)
// let m=[1,2,3,4]
// function find(element){
// for(let i=0;i<m.length;i++){
//     if(m[i]==element)return true
// }
// return false

// }
// console.log(find(12))

// //  Find the first occurrence of a target value in an array.

// const arr = [10, 20, 30, 20, 40];
// let index=-1
// let target=10
// for(let i =0;i<arr[i]!=undefined;i++){
//     if(arr[i]==target){
//         index=i
//         break
//     }
// }
// console.log(index)

//  Sum all the elements in an array.

// let a=[1,2,3,4]
// let sum=0
// for(let i of a){
//     sum+=i
// }
// console.log(sum)


//  Find the average of numbers in an array.
// let a=[1,2,3,4]
// let sum=0
// for(let i=0;i<a.length;i++){
//     sum+=a[i]
// }
// console.log("average",sum/a.length)

// Count the number of even and odd numbers in an array.
// let arr=[1,2,3,4]
// let countOfeven=0
// let countOfodd=0
// for(let i of arr){
//     if(i%2==0){
//         countOfeven++
//     }else{
//         countOfodd++
//     }
// }
// console.log("even : ",countOfeven) 
// console.log("odd : ",countOfodd) 


//  Count how many times each element appears.
// let arr=[11,2,2,3,1,1,9]
// let map={}
// for(let i of arr){
//     map[i]?map[i]++:map[i]=1
// }
// for(let i in map){
//     console.log(i, ": ",map[i])
// }

//  Find the second largest number.

// let a=10
// let b=187
// let c=2
// let large;
// if((a>b&&a<c)||(a<c||a>b)){
//     console.log(a)
// }else if((b>a&&b<c)||(b>c&&b<a)){
//     console.log(b)
// }else{
//     console.log(c)
// }


//  Check if a number is prime or not.
// let s=10
// let isPrime=true
// for(let i=2;i<=s/2;i++){
//     if(s%i==0){
//         isPrime=false
//         break
//     }
// }
// console.log(isPrime?true:false)


//  Remove vowels from a string.
// let str='fahadeiE'
// let v='aeiouAEIOU'
// for(let i=0;i<str.length;i++){
//     for(let j=0;j<v.length;j++){
//         if(str[i]==v[j]){
//             console.log(str[i])
//         }
//     }
// }


//  Reverse a string.
// let str='fahad'
// let rev=''
// for(let i=str.length-1;i>=0;i--){
//     rev+=str[i]
// }
// console.log(rev)


//  Move zeros to the end of an array.
// let arr=[1,2,3,0,4,0,5,0]
// let index=0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]!=0){
//         arr[index]=arr[i]
//         index++
//     }
// }
// for(let i=index;i<arr.length;i++){
//     arr[i]=0
// }
// console.log(arr)

//  Move zeros to the beginning of an array.
// let arr=[1,2,0,3,0,2]
// let index=arr.length-1
// for(let i=arr.length-1;i>=0;i--){
//     if(arr[i]!=0){
//         arr[index]=arr[i]
//         index--
//     }
// }
// for(let i=index;i>=0;i--){
//     arr[i]=0
// }
// console.log(arr)


//  Print multiples of 3 using a do-while loop.
// let n=100
// i=1
// do{
//   if(i%3==0){
//       console.log(i)
//   } 
//   i++
// }while(i<100)


//  Shift array elements one position to the left.
// let a=[1,2,3,4]
// for(let i=0;i<a.length;i++){
//     a[i]=a[i+1]
// }
// a[a.length-1]=0
// console.log(a)

//  Sort an array manually (no .sort).


// let a=[8,3,1,83]
// for(let i=0;i<a.length-1;i++){
//     for(let j=i+1;j<a.length;j++){
//         if(a[i]>a[j]){
//             let temp=a[i]
//             a[i]=a[j]
//             a[j]=temp
//         }
//     }
// }
// console.log(a)


// Rotate an array n times to the right.
// let a=[1,2,3,4]
// let n=2
// let element
// for(let i=0;i<n;i++){
//   element=a[a.length-1]
//   for(let j=a.length-1;j>=0;j--){
//       a[j]=a[j-1]
//   }
//   a[0]=element
// }

// console.log(a)


//  Find all occurrences of a target value in an array.
// let target=1
// let a=[1,2,3,1,4]
// for(let i=0;i<a.length;i++){
//     if(a[i]==target){
//         console.log(i)
//     }
// }

// Find max and min values without Math.max or Math.min.
// let a=[10,2,3,4,5]
// let max=-Infinity
// let min=Infinity
// for(let i=0;i<a.length;i++){
//     if(a[i]>max){
//         max=a[i]
//     }
//     if(a[i]<min){
//         min=a[i]
//     }
// }
// console.log(min,max)



//  Remove duplicates from an array without built-in methods.
// let a=[1,1,2,2,3,4,5,5,6]
// for(let i=0;i<a.length;i++){
//     for(let j=i+1;j<a.length;j++){
//         if(a[i]==a[j]){
//             for(let k=i;k<a.length-1;k++){
//                 a[k]=a[k+1]
//             }
//             a.length--
//             i--
//         }
//     }
// }
// console.log(a)

//  Find the difference between max and min values in an array.
// let a=[1,2,3,4,5]
// let min=Infinity
// let max=-Infinity
// for(let i=0;i<a.length;i++){
//     if(a[i]>max){
//         max=a[i]
//     }
//     if(a[i]<min){
//         min=a[i]
//     }
// }
// console.log(max-min)



//  Check if two arrays are equal.
// let a=[1,2,3,4,5]
// let b=[1,2,3,4,5]
// let equal=true
// if(a.length!=b.length){
//     console.log(false)
//     return
// }
// for(let i=0;i<a.length;i++){
//     if(a[i]==b[i]){
//         equal=true
//     }else{
//         equal=false
//         break
//     }
// }
// console.log(equal)


//  Find common elements between two arrays.
// let a=[1,2,6,7]
// let b=[0,9,1,2]
// for(let i=0;i<a.length;i++){
//     for(let j=0;j<b.length;j++){
//         if(a[i]==b[j]){
//             console.log(b[j])
//             break
//         }
//     }
// }
//  Split an array at a given index.
// let a=[1,2,3,4,5]
// let f=[]
// let s=[]
// let index=0
// for(let i=0;i<a.length/2;i++){
//     f[index]=a[i]
//     index++
// }
// let n=0 
// for(let i=index;i<a.length;i++){
 
//     s[n]=a[i]
//   n++
// }
// console.log(f)
// console.log(s)

// Check if an array is a palindrome

// let a=[1,2,2,1]
// let end=a.length-1
// let res=true
// for(let i=0;i<a.length/2;i++){
//     if(a[i]!=a[end]){
//         res=false
//         break
//     }
//     end--
// }
// console.log(res)


//  Find the union of two arrays (no duplicates).
// let a=[1,1,2,3,3,4]
// let b=[4,8,8,9,1]
// let res=[]
// let index=0
// for(let i=0;i<a.length;i++){
//     res[index]=a[i]
//     index++
// }
// console.log(res)
// for(let i=0;i<b.length;i++){
//     res[index]=b[i]
//     index++
// }
// console.log(res)
// for(let i=0;i<res.length;i++){
//     for(let j=0;j<res.length;j++){
//         if(i!=j&&res[i]==res[j]){
//             for(let k=j;k<res.length-1;k++){
//                 res[k]=res[k+1]
//             }
//             res.length--
//             i--
//         }
//     }
// }
// console.log(res)





// Merge two sorted arrays into one sorted array.
// const a = [1, 3, 5, 7];
// const b = [2, 4, 6, 8, 10];
// let merge=[]
// let j=0
// for(let i=0;i<a.length;i++){
//     merge[j]=a[i]
//     j++
// }
// for(let c=0;c<b.length;c++){
//     merge[j]=b[c]
//     j++
// }
// for(let i=0;i<merge.length-1;i++){
//     for(let j=i+1;j<merge.length;j++){
//         if(merge[i]>merge[j]){
//         let temp=merge[i]
//         merge[i]=merge[j]
//         merge[j]=temp
//         }
//     }
// }
// console.log(merge)
 
// Find the missing number in a sequence.
// let a=[1,2,5,8]
// let min=Infinity
// let max=-Infinity
// for(let i=0;i<a.length;i++){
//     if(a[i]>max){
//         max=a[i]
//     }
//     if(a[i]<min){
//         min=a[i]
//     }
// }
// for(let i=min;i<max;i++){
//     let isFind=true
//     for(let j=0;j<a.length;j++){
//         if(a[j]==i){
//             isFind=false
//             break
//         }
//     }
//     if(isFind){
//         console.log(i)
//     }
// }

//  Delete even numbers from an array.
// let a=[1,2,3,4,4,5]
// for(let i=0;i<a.length;i++){
//     if(a[i]%2==0){
//         for(let k=i;k<a.length-1;k++){
//             a[k]=a[k+1]
//         }
//         a.length--;
//         i--
//     }
// }
// console.log(a)


//  Delete prime numbers from an array.
// let a=[1,2,3,4,5,6,7,8,9,10]
// for(let i=0;i<a.length;i++){
//     if(a[i]==1)continue
//     let isPrime=true
//     for(let j=2;j<=a[i]/2;j++){
//         if(a[i]%j==0){
//             isPrime=false
//             break;
//         }
//     }
//     if(isPrime){
//         for(let k=i;k<a.length-1;k++){
//             a[k]=a[k+1]
//         }
//         a.length--
//         i--
//     }
// }
// console.log(a)

// Find the smallest prime number.
// let a=[1,3,4,2,5,6,7]
// let small=Infinity
// for(let i=0;i<a.length;i++){
//     if(a[i]==1)continue
//     let isPrime=true
//     for(let j=2;j<=a[i]/2;j++){
//         if(a[i]%j==0){
//             isPrime=false
//             break
//         }
//     }
//     if(isPrime&&a[i]<small){
//         small=a[i]
//     }
// }
// console.log(small)



//  Find the longest string in an array.
// let a=["fahad","rahman","ch"]
// let max=0
// let length=0
// for(let i of a){
//     if(i.length>length){
//         max=i
//         length=i.length
//     }
// }
// console.log(max)

//  Elements that appear only once in an array.
// let a=[1,2,2,3,4,4,5]
// let map={}
// for(let i of a){
//     map[i]?map[i]++:map[i]=1
// }
// for(let i in map){
//     if(map[i]==1){
//         console.log(i)
//     }
// }
// ==================================
// for(let i=0;i<a.length;i++){
//     let count=1
//     for(let j=0;j<a.length;j++){
//         if(i!=j&&a[i]==a[j]){
//             count++
//             break
//         }
//     }
//     if(count==1){
//         console.log(a[i])
//     }
// }


//  Remove multiples of 2 from an array.
// let a=[1,2,3,4,5,6]
// for(let i=0;i<a.length;i++){
//     if(a[i]%2==0){
//         for(let k=i;k<a.length;k++){
//             a[k]=a[k+1]
//         }
//         a.length--
//         i--
//     }
// }
// console.log(a)

//  Reverse an array in place.
// let a=[1,2,3,4]
// for(let i=0;i<a.length/2;i++){
//     let temp=a[i]
//     a[i]=a[a.length-1-i]
//     a[a.length-1-i]=temp
    
// }
// console.log(a)

// Reverse a nested array.
// let a=[[1, 2], [3, 4], [5, 6]]
// for(let i=0;i<a.length/2;i++){
//     let temp=a[i]
//     a[i]=a[a.length-1-i]
//     a[a.length-1-i]=temp
    
// }
// console.log(a)


//  Sort strings in an array in ascending order.
// let a='bacd'
// let s=[]
// for(let i=0;i<a.length;i++){
//     s[i]=a[i]
// }
// for(let i=0;i<s.length;i++){
//     for(let j=i+1;j<s.length;j++){
//         if(s[i]>s[j]){
//             let temp=s[i]
//             s[i]=s[j]
//             s[j]=temp
//         }
//     }
// }
// a=''
// for(let j=0;j<s.length;j++){
//     a+=s[j]
// }
// console.log(a)


//  Replace prime numbers with 0.
// let a=[1,2,3,4,5,6,7,8,9,10]
// for(let i=0;i<a.length;i++){
//     if(a[i]==1)continue
//     let isPrime=true
//     for(let j=2;j<=a[i]/2;j++){
//         if(a[i]%j==0){
//             isPrime=false
//         }
//     }
//     if(isPrime){
//         a[i]=0
//     }
// }
// console.log(a)















































































































































































































































