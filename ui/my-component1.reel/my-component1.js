/**
 * @module ui/my-component1.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class MyComponent1
 * @extends Component
 */
exports.MyComponent1 = Component.specialize(/** @lends MyComponent1# */ {
    constructor: {
        value: function MyComponent1() {
            this.super();
        }
    }
});
