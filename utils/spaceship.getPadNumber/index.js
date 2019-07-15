function getPadNumber(padCount, value) {
  const point = Array(pad).fill('0');
  const PAD = point.map(_ => '0').join('');

  return (PAD + value).slice(-pad);  
}

export default getPadNumber;
