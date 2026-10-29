function timeSplit(time) {
  const [hours, minutes] = time.split(':').map(Number);

  return hours * 60 + minutes;
}

function timeValidator(workdayStart, workdayEnd, meetingStart, duration) {
  const workStartMin = timeSplit(workdayStart);
  const workEndMin = timeSplit(workdayEnd);
  const meetingStartMin = timeSplit(meetingStart);
  const meetingEndMin = meetingStartMin + duration;

  return meetingStartMin >= workStartMin && meetingEndMin <= workEndMin;
}

timeValidator('08:00', '17:30', '14:00', 90); // true
timeValidator('8:0', '10:0', '8:0', 120);     // true
timeValidator('08:00', '14:30', '14:00', 90); // false
timeValidator('14:00', '17:30', '08:0', 90);  // false
timeValidator('8:00', '17:30', '08:00', 900); // false
