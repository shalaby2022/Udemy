export const secToMin = (sec: number): number => {
  return +(sec / 60).toFixed();
};

export const formatSec = (sec: number): string => {
  const _min = sec / 60;
  const _sec = sec % 60;
  const minText = `${_min} min`;
  const secText = `${_sec} sec`;
  const connector = 'and';

  const sentence = [];

  if (_min > 0) {
    sentence.push(minText);
  }

  if (_min > 0 && _sec > 0) {
    sentence.push(connector);
  }

  if (_sec > 0) {
    sentence.push(secText);
  }

  return sentence.join(' ');
};
