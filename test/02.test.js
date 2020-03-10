const cipher = require("../src/02.js")

test("Encrypt is:", () => {
    expect(cipher.encrypt('Ini tulisan rahasia', 'p4$$w0rd')).toMatch('U2FsdGVkX1')
},"Decrypt is:",() => {
    expect(cipher.decrypt('U2FsdGVkX18O2o2DhkoxBZ6Ivise2tWIDO4W0XwQWn5CtiuL55yx5+OwI81uj18G', 'p4$$w0rd')).toBe('Ini tulisan rahasia')
});