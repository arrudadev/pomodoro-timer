const formatTimer = (timeInSeconds: number): string => {
  let minute: number | string = Math.floor(timeInSeconds / 60);
  let second: number | string = timeInSeconds - 60 * minute;

  if (minute < 10) minute = `0${minute}`;

  if (second < 10) second = `0${second}`;

  return `${minute}:${second}`;
};

export default formatTimer;
