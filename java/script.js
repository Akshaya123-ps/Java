// if (5>3) {
//    console.log("5 is greater") 
// } else {
//   console.log("3 is greater")  
// }
// 
// var array=[1,2,3,4,5,6,7,8,9,10]
// console.log(array.length)
// for(i=0;i<array.length;i++)
// {
//     console.log(i)
// }
// for(i=1;i<=100;i++)
// {
//     console.log(i)
// }
// var array=[1,2,3,4,5,6,7,8,9,10]
// let evencount=0
// let oddcount=0
// for(i=0;i<array.length;i++){
//     if(array[i]%2==0){
//         evencount = evencount+1
//     }
//     else if(array[i]%2!=0){
//         oddcount = oddcount+1
//     }
// }
// console.log(oddcount)
// console.log(evencount)
// var array=[1,2,3,4,5,6,7,8,9,10] 
//  oddsum=0
//  evensum=0
// for(i=0;i<=10;i++){
//      if(array[i]%2==0)
//     evensum=evensum+i
//     else if(array[i]%2!=0){
//         oddsum=oddsum+i
//     }
// }
// console.log(oddsum)
// console.log(evensum)

// while loop
//  let i=1;
//  while(i<=10){
//     console.log(i);
//     i++;
//  }
//  let i=1;
//  while(i<=10){
//     console.log("Akshaya");
//     i++;
//  }
//  let a=0;
//  while(a<=100){
//     if(a%2==0){
//         console.log(a);
//     }
//     a++;
//  }
//  let b=100;
//  while(b<=500){
//     if(a%2!=0){
//         console.log(b);
//     }
//     b++;
//  }
//  let c=100;
//  while(c<=500){
//     if(c%2==0){
//          console.log(c);
//          c++;
//     }
   
//    else if(c%2!=0){
//        console.log(c);
//        c++;
//    }
   
//  }
//  let d=1;
//  let num=4;
//  let limit=10;
//  while(d<=limit){
//     console.log(d+"*"+num+"="+d*num);
//     d++;
//  }
// let i=2;
// let fact=1;
// let num=5;
// while(i<=num){
//    fact=fact*i;
//    i++; 
// }
// console.log(fact)

//  fibonacci(num) {
// 	let num1 = 0;
// 	let num2 = 1;
// 	let sum;
// 	let i = 0;
// 	for (i = 0; i < num; i++) {
// 		sum = num1 + num2;
// 		num1 = num2;
// 		num2 = sum;
// 	}
// 	return num2;
// }

// console.log("Fibonacci(5): " + fibonacci(5));
// console.log("Fibonacci(8): " + fibonacci(8));
// let i=1;
// do{
//     console.log("hello my friends")
//     i++;
// }while(i<0)

// var array=[1,2,3,4,5,6,7,8,9,10,] 
//  oddsum=0
//  evensum=0
// for(i=0;i<=10;i++){
//      if(i%2==0)
//     evensum=evensum+i;
     
//     else if(i%2!=0){
//         oddsum=oddsum+i;
//     }
// }
// console.log(evensum)
// console.log(oddsum)

// let a=1;
// evensum=0;
// oddsum=0;
//  while(a<=10){
//     if(a%2==0){
//         evensum=evensum+a;
//     }
//  else if (a%2!=0){
//         oddsum=oddsum+a;
       
//  }
//  a++;
// }  
// console.log(evensum)
// console.log(oddsum)

// let b=1;
// evensum=0;
// oddsum=0;
// do{
//    if(b%2==0){
//     evensum=evensum+b;
//    }
//    else if(b%2!=0){
//     oddsum=oddsum+b;
//    }
//    b++;
// }while(b<=10)
// console.log(evensum)
// console.log(oddsum)
let timearr=[10.,11,13,14,15,17,20,19]

for(i=0;i<timearr.length;i++){
    if(timearr[i]>=5&&timearr[i]<=12){
        console.log(timearr[i]+"A.M Good morning")
    }
    if(timearr[i]>=13&&timearr[i]<=18){
        console.log(timearr[i]+"P.M Good afternoon ")
    if(timearr[i]>=18&&timearr[i]<=21){
            console.log(timearr[i]+"P.M Good evening")
    }
}
}
