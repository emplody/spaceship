function sum(a, b) {
  return a + b;
}

describe('[TEST] normal case', () => {
  it('Example Util Normal Case 1', () => {
    expect(sum(1, 2)).toBe(3);
  })
})
