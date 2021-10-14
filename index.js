// Code your solution here

// function cb(drivers, index, name) {
// if (drivers[index] === name) {
//   return true;
//  }
// }

function correctDrivers(arr, ele) {
  return arr.filter(n => {
    return n.toLowerCase() === ele.toLowerCase();
  })
}

function findMatching(drivers, name) {
  return correctDrivers(drivers, name);
  addDriver()
}

function fuzzyMatch(arr, letters) {
  return arr.filter(current => {
    var sliced = current.slice(0, letters.length)
return (sliced === letters);
  })
}

function matchName(driversArray, stringName) {
  return driversArray.filter(current => {
    return current.name.toLowerCase() === stringName.toLowerCase();
  })
}


