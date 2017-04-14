l
List constructor

Examples

l(); // ()
l(8, 10); // (8, 10)
isList
Check if argument is list

Parameters

mix any
Examples

isList(l()); // true
isList(l('a', 5)); // true
isList(false); // false
isList('hello'); // false
isEmpty
Check if list is empty

Parameters

list List
Examples

isEmpty(l()); // true
isEmpty(l(0)); // false
isEmpty(l('a', 5)); // false
head
Get list's head

Parameters

list List
Examples

head(l(10, 15, 20)); // 10
tail
Get list's tail

Parameters

list List
Examples

tail(l(10, 15, 20)); // (15, 20)
append
Join 2 lists

Parameters

list1 List
list2 List
Examples

const numbers = l(3, 4, 5, 8);
const numbers2 = l(3, 2, 9);
append(numbers, numbers2); // (3, 4, 5, 8, 3, 2, 9)
append(l(), l(1, 10)); (1, 10)
append(l(1, 10), l()); // (1, 10)