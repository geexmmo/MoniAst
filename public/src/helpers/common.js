export function secToHuman(sec) {
  if (!sec) {
    return '00:00:00';
  }

  const secNum = parseInt(sec, 10); // don't forget the second param
  let hours   = Math.floor(secNum / 3600);
  let minutes = Math.floor((secNum - (hours * 3600)) / 60);
  let seconds = secNum - (hours * 3600) - (minutes * 60);

  if (hours   < 10) {hours   = `0${hours}`;}
  if (minutes < 10) {minutes = `0${minutes}`;}
  if (seconds < 10) {seconds = `0${seconds}`;}

  return `${hours}:${minutes}:${seconds}`;
}

export function UserException(message, status) {
  this.message = message;
  this.status = status;
}

export function paramsForAPI(params) {
  return Object.keys(params)
    .map((el) => `${el}=${params[el]}`)
    .join('&');
}