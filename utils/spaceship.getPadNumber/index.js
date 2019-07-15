function getPadNumber(padCount, value) {
  const point = Array(padCount).fill('0');
  const PAD = point.map(_ => '0').join('');

  return (PAD + value).slice(-padCount);  
}

export default getPadNumber;
