var assert = require('chai').assert;
var Fish = require('../classes/fish');

describe('Fish', function() {

  it.skip('should have a name, diet, and know if it has bright colors', function() {
    var fish = {
      name: "Marine Angel Fish",
      diet: "omnivore",
      temperament: "territorial",
      bright: true,
    };
    var angelFish = new Fish(fish);

    assert.equal(angelFish.name, "Marine Angel Fish");
    assert.equal(angelFish.diet, "omnivore");
    assert.equal(angelFish.temperament, "territorial");
    assert.equal(angelFish.brightColors, true);
  });

  it.skip('should be able to have a different name, diet, and bright colors status', function() {
    var fish = {
      name: "Blood Parrot Cichlid",
      diet: "omnivore",
      temperament: "peaceful",
      bright: true,
    };
    var bloodParrot = new Fish(fish);

    assert.equal(bloodParrot.name, "Blood Parrot Cichlid");
    assert.equal(bloodParrot.diet, "omnivore");
    assert.equal(bloodParrot.temperament, "peaceful");
    assert.equal(bloodParrot.brightColors, true);
  });

  it.skip('should be able to join a school', function() {
    var fish = {
      name: "Blood Parrot Cichlid",
      diet: "omnivore",
      temperament: "peaceful",
      bright: true,
    };
    var bloodParrot = new Fish(fish);

    assert.equal(bloodParrot.inSchool, false);

    bloodParrot.joinSchool();

    assert.equal(bloodParrot.inSchool, true);
  });

  it.skip('should be able to abandon its school', function() {
    var fish = {
      name: "Blood Parrot Cichlid",
      diet: "omnivore",
      temperament: "peaceful",
      bright: true,
    };
    var bloodParrot = new Fish(fish);

    bloodParrot.joinSchool();
    bloodParrot.leaveSchool();

    assert.equal(bloodParrot.inSchool, false);
  });

  it.skip('should be able to swim, with attitude', function() {
    var fish = {
      name: "Moorish Idol",
      diet: "omnivore",
      temperament: "peaceful",
      bright: true,
    };
    var moorishIdol = new Fish(fish);

    assert.equal(moorishIdol.swim(), "I'm peacefully swimming 🐠");
  });

  it.skip('should be able to swim, with its attitude', function() {
    var fish = {
      name: "Marine Angel Fish",
      diet: "omnivore",
      temperament: "territorial",
      bright: true,
    };
    var angelFish = new Fish(fish);

    assert.equal(angelFish.swim(), "I'm territorially swimming 🐠");
  });

});
