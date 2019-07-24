var assert = require('chai').assert;
var Dog = require('./dog');

describe('Dog', function() {

  it.skip('should have a name', function() {
    var fido = new Dog("Fido");
    var baxter = new Dog("Baxter");

    assert.equal(fido.name, "Fido");
    assert.equal(baxter.name, "Baxter");
  });

  it.skip('should be friendly', function() {
    var fido = new Dog("Fido");

    assert.equal(fido.personality, "friendly");
  });

  it.skip('should start as a newborn pup', function() {
    var fido = new Dog("Fido");

    assert.equal(fido.age, 0);
  });

  it.skip('should grow up, in human years', function() {
    var fido = new Dog("Fido");

    fido.growUp();
    fido.growUp();
    fido.growUp();
    assert.equal(fido.age, 21);
  });

  it.skip('should be considered a puppy when 7 human years or younger', function() {
    var fido = new Dog("Fido");

    assert.equal(fido.puppy, true);
    fido.growUp();
    assert.equal(fido.puppy, true);
    fido.growUp();
    assert.equal(fido.puppy, false);
  });

  it.skip('should be popular if name starts with the letter B', function() {
    var baxter = new Dog("Baxter");
    var bella = new Dog("Bella");
    var daisy = new Dog("Daisy");
    var fido = new Dog("Fido");

    assert.equal(baxter.popular, true);
    assert.equal(bella.popular, true);
    assert.equal(daisy.popular, false);
    assert.equal(fido.popular, false);
  });
});
