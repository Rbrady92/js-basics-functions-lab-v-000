// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  return Math.abs(42 - street)
}

function distanceFromHqInFeet(street) {
  return Math.abs(distanceFromHqInBlocks(street) * 264)
}

function distanceTravelledInFeet(start, end) {
  return (Math.abs(end - start) * 264)
}

function calculateFarePrice(start, end) {
  let price = 0
  
  if (distanceFromHqInFeet(start, end) < 400) return price
  if (distanceTravelledInFeet(start, end) > 400 && distanceTravelledInFeet(start, end) < 2000) {
    price = distanceTravelledInFeet(start, end) * .02
  }
}