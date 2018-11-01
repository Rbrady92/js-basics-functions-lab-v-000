// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  return Math.abs(42 - street)
}

function distanceFromHqInFeet(street) {
  return Math.abs((42 * 264) - (distanceFromHqInBlocks(street) * 264))
}