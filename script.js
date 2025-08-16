function isSameType(value1, value2) {
  //your js code here
	// If both are NaN → true
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // If only one is NaN → false
  if (Number.isNaN(value1) || Number.isNaN(value2)) {
    return false;
  }

  // Otherwise compare types
  return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
