const hash = require('../src/01.js');


test('Sha 512', () => {
  expect(hash.sha512("secret")).toBe("vSsar3708Jvp9Szi2NWZZ02Bqp1qRCFpbcTZPdBhnWgs5WtNZKnvCXdhztmeD2cmW192CF5bDufKRpayrW/isg==")
},'Sha 256', () => {
    expect(hash.sha256("secret")).toBe("K7gNU3sdo+OL0wNhqoVWhr3g6s1xYv72ol/pe/Unols=")
  },'Sha 1', () => {
    expect(hash.sha1("secret")).toBe("5en6G6MezRroT3XKqkdPOmY/BfQ=")
  },'MD5', () => {
    expect(hash.sha1("secret")).toBe("Xr4ilOzQ4PCOq3aQ0qbuaQ==")
  });
