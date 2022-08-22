const calculateBidTimeLeft = (bidExperationDate) => {
  let timeLeft = new Date(bidExperationDate).getTime() - new Date().getTime()

  if(timeLeft > 0) {
    let daysLeft = Math.floor(timeLeft/1000/60/60/24)
    timeLeft -= daysLeft*1000*60*60*24
  
    let hoursLeft = Math.floor(timeLeft/1000/60/60)
    timeLeft -= hoursLeft*1000*60*60

    let minutesLeft = Math.floor(timeLeft/1000/60)
    timeLeft -= minutesLeft*1000*60

    let secondsLeft = Math.floor(timeLeft/1000)

    daysLeft < 10 ? daysLeft = '0' + daysLeft : null
    hoursLeft < 10 ? hoursLeft = '0' + hoursLeft : null
    minutesLeft < 10 ? minutesLeft = '0' + minutesLeft : null
    secondsLeft < 10 ? secondsLeft = '0' + secondsLeft : null

    return `${daysLeft}:${hoursLeft}:${minutesLeft}:${secondsLeft}`
  }
  else {
    return 'expired'
  }
}

export default calculateBidTimeLeft
