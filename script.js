function isSameType(value1, value2) {
  //your js code here
	 // Check if both values are NaN; return false if only one is NaN
  if (Number.isNaN(value1) || Number.isNaN(value2)) {
    return Number.isNaN(value1) && Number.isNaN(value2);
  }
  // Check if both values have the same type
  return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
