var assert = require('chai').assert;
var Aquarium = require('../classes/aquarium');

describe('Aquarium', function() {

  it.skip('should have a name and location', function() {
    var downtownDenver = new Aquarium("Downtown Aquarium", "Denver");
    assert.equal(downtownDenver.name, "Downtown Aquarium");
    assert.equal(downtownDenver.location, "Denver");

    var sheddChicago = new Aquarium("Shedd Aquarium", "Chicago");
    assert.equal(sheddChicago.name, "Shedd Aquarium");
    assert.equal(sheddChicago.location, "Chicago");
  });

  it.skip('should start with no fish', function() {
    var downtownDenver = new Aquarium("Downtown Aquarium", "Denver");
    assert.deepEqual(downtownDenver.allFish, []);
    assert.equal(downtownDenver.allFish.length, 0);
  });

  it.skip('should start be able to add fish', function() {
    var fish = {
      name: "Moorish Idol",
      diet: "omnivore",
      temperament: "peaceful",
      bright: true,
    };
    var moorishIdol = new Fish(fish);
    var downtownDenver = new Aquarium("Downtown Aquarium", "Denver");

    downtownDenver.addFish(moorishIdol);

    assert.deepEqual(downtownDenver.allFish, [moorishIdol]);
    assert.equal(downtownDenver.allFish.length, 1);
  });

  it.skip('should not add territorial fish', function() {
    var fish = {
      name: "Marine Angel Fish",
      diet: "omnivore",
      temperament: "territorial",
      bright: true,
    };
    var bloodParrot = new Fish(fish);
    var downtownDenver = new Aquarium("Downtown Aquarium", "Denver");

    downtownDenver.addFish(bloodParrot);

    assert.deepEqual(downtownDenver.allFish, []);
    assert.equal(downtownDenver.allFish.length, 0);
  });

  it.skip('should give feedback on why it adds or does not add a fish', function() {
    var fish1 = {
      name: "Marine Angel Fish",
      diet: "omnivore",
      temperament: "territorial",
      bright: true,
    };
    var bloodParrot = new Fish(fish1);
    var downtownDenver = new Aquarium("Downtown Aquarium", "Denver");

    assert.equal(downtownDenver.addFish(bloodParrot), "Sorry, we only accept peaceful fish.")

    var fish2 = {
      name: "Moorish Idol",
      diet: "omnivore",
      temperament: "peaceful",
      bright: true,
    };
    var moorishIdol = new Fish(fish2);
    var downtownDenver = new Aquarium("Downtown Aquarium", "Denver");
    var sheddChicago = new Aquarium("Shedd Aquarium", "Chicago");

    assert.equal(downtownDenver.addFish(moorishIdol), "Welcome to the Downtown Aquarium in Denver!")
    assert.equal(sheddChicago.addFish(moorishIdol), "Welcome to the Shedd Aquarium in Chicago!")
  });

});
