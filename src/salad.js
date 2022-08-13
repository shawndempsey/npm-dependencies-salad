const { Lettuce } = require("npm-dependencies-lettuce");

class Salad {
    constructor() {
        this.lettuce = new Lettuce();
    }
    describe() {
        return `Salad v1.0.0 ${this.lettuce.describe()}`;
    }
}
module.exports.Salad = Salad;
