# BULUT BİLİŞİM



```js
const printFormat = (...i) => console.log(...(i.map(i => i.toString())));
const array = [1, 2, 3, 4, 5];
printFormat(array); // 1,2,3,4,5

const clone1 = array;
const clone2 = [...array];
array[0] = 50;
printFormat(array, clone1, clone2); // 50,2,3,4,5 50,2,3,4,5 1,2,3,4,5
```



# Abdulbaki Zırıh