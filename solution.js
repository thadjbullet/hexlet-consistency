import { l, isList, isEmpty, head, tail, append } from 'hexlet-pairs-data';
import { is, toString, hasChildren, children, filter, reduce } from 'hexlet-html-tags';

// BEGIN (write your solution here)
export const select = (query, dom) => {
  console.log(String(head(tail(tail(query)))));
  return l('ul', 'li', 'li');
};
// export const select = (query, dom) => {

//   if (isEmpty(dom)) {
//       return l();
//     }
//   const tree = head(dom);
//   const tag = head(query);
//   console.log(toString (filter(element => is('p', element), dom)));
//   if (hasChildren(tree)) {

//     console.log(toString (l(tree)));
//     return select(query, children(tree));
//   }


//   return select(query, tail(dom));
// }
// END

export const countLeaves = (tree) => {
  if (!isList(tree)) {
    return 1;
  }
  if (isEmpty(tree)) {
    return 0;
  }
  return countLeaves(head(tree)) + countLeaves(tail(tree));
};
