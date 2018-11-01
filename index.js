// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  return Math.abs(42 - street)
}

function distanceFromHqInFeet(street) {
  return Math.abs(distanceFromHqInBlocks(street) * 264)
}
