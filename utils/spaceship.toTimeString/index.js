function toTimeString(timestamp, separator = ':') {
  const MS_PER_HOURS = 1000 * 60 * 60;
  const MS_PER_MINUTES = 1000 * 60;
  const MS_PER_SECONDS = 1000;
  const PAD = '00';

  if (timestamp < 0) {
    return '00:00:00';
  }

  const padHours = Math.floor(timestamp / MS_PER_HOURS);
  const padMinutes = Math.floor((timestamp - padHours * MS_PER_HOURS) / MS_PER_MINUTES);
  const padSeconds = Math.floor((timestamp - padHours * MS_PER_HOURS - padMinutes * MS_PER_MINUTES) / MS_PER_SECONDS);  
  
  return `${(PAD + padHours).slice(-2)}${separator}${(PAD + padMinutes).slice(-2)}${separator}${(
  	PAD + padSeconds
  ).slice(-2)}`;
};

export default toTimeString;