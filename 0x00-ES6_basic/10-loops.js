export default function appendToEachArrayValue(array, appendString) {
  const updatedArray = [];
  for (const e of array) {
    updatedArray.push(appendString + e);
  }

  return updatedArray;
}
