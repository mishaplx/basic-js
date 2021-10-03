import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 export default function deleteDigit(n) {
  let res = [];
  let arr = String(n).split("").sort();
  for (let i = 1; i < arr.length; i++) {
    res.push(arr[i]);
  }
  let Num = res.reverse().join("");
  return Number(Num);
}