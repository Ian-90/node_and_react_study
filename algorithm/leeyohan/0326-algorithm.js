const solution = (s) => {
  let midIndex = s.length / 2 ;
  let answer = '';
  if ( !Number.isInteger(midIndex) ) {
      answer = s[Math.floor(midIndex)];
  } else {
      answer = `${s[midIndex - 1]}${s[midIndex]}`;
  }

  return answer;
}