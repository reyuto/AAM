/*
 * @author Sumitro Chatterjee
 * @dated 8th November, 2013
 * This tool is a Generator. Which can be used to create 
 * mutator and accessor methods for properties on an object.
 */
 
 
/**
 * @constructor
 * @param {Object.<*>} obj The object which should be extended
 * @params {Object.<string|number|Array|Object>} properties 
 *                      The properties which should be extended
 */ 
function MutatorAndAccessorGen(obj, properties) {
    /**
     * @private
     * @params {*} test The check which should not be a false value
     * @params {String} message The message which should be displayed on error
     * Checks if the test element is false, and stops the execution;
     */
    function assert(test, message) {
        if (!(test >>> 0)) {
            alert(message);
            debugger;
        } 
    }

    function each(object, scope, fn) {
        for (var item in object) {
            if (object.hasOwnProperty(item)) {
                fn.call(scope || object, object[item], item, object);
            }
        }
    }

    function set(object, properties) {
        each(properties, object, function(property, propertyName) {
            this[propertyName] = property;
        });
    }

    function getter(property) { 
        return function() {
            return this[property];
        } 
    }
    
    function setter(property) { 
        return function(val) {
            this[property] = val;
        } 
    }
    
    each(properties, obj, function(property, propertyName, properties) {
        assert(typeof properties === 'object', 'No properties defined for generation.');
        var propertyObj = {};
        var propertyNameStartingInCaps = propertyName.charAt(0).toUpperCase() + String.prototype.slice.call(propertyName, 1);
        propertyObj["_"+propertyName] = property;
        propertyObj["get"+propertyNameStartingInCaps] = getter.call(propertyObj, '_'+propertyName);
        propertyObj["set"+propertyNameStartingInCaps] = setter.call(propertyObj, '_'+propertyName);

        set(obj, propertyObj);
    });

} 
