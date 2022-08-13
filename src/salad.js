const { Lettuce } = require("npm-dependencies-lettuce");

class Salad {
    constructor() {
        this.lettuce = new Lettuce();
    }
    describe() {
        return `Salad v1.0.2 ${this.lettuce.describe()}`;
    }
}
module.exports.Salad = Salad;
