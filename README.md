AAM
===

Generator Function for Actuators and Mutators on an Object

<pre><code>
  var myObject = {
    'name': 'My Object',
    'age': '0L',
    'address': '/home'
    'description': 'This is my simple object!'
  };
  
  var myAdvancedObject = new Object();
  
  MutatorAndAccessorGen(myAdvancedObject, myObject);
  
  JSON.stringify(myAdvancedObject);
  // RETURNS: {"_name":"My Object","_age":"0L","_address":"/home","_description":"This is my simple object!"}
  
  myAdvancedObject.getName();     // RETURNS: "My Object"
  myAdvancedObject.getAddress();  // RETURNS: "/home"
  myAdvancedObject.getAge();      // RETURNS: 0
  myAdvancedObject.setAge(1);     // RETURNS: undefined
  myAdvancedObject.getAge();      // RETURNS: 1

</code></pre>
