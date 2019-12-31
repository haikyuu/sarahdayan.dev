export default function mergeArrays<TType>(...arrs: TType[][]) {
  return arrs.reduce((acc, curr) => acc.concat(...curr), []);
}
