function MutatorAndAccessorGen(obj, properties) {
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
        var propertyObj = {};
        var propertyNameStartingInCaps = propertyName.charAt(0).toUpperCase() + String.prototype.slice.call(propertyName, 1);
        propertyObj["_"+propertyName] = property;
        propertyObj["get"+propertyNameStartingInCaps] = getter.call(propertyObj, '_'+propertyName);
        propertyObj["set"+propertyNameStartingInCaps] = setter.call(propertyObj, '_'+propertyName);

        set(obj, propertyObj);
    });

} 