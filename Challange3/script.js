/* 
Approach

1. split key in key array.
2. store object in object array so we can leverage the array destructuring.
3. Execute step 4 till all the keys in keys array are covered.
4. Check key in keys with the key of object
    if both are equal then store the object value(i.e nested object) in original object.
    else if keys are not matching then return "Invalid key".
5. finally we get the value in object at 0 position.
*/


const getValue = (obj, keys) => {

    if (keys.length == 0) return 'Invalid key';
    if (!(typeof obj == 'object')) return 'Invalid object';
    
    
    keys = keys.split('/');
    obj = [obj];

    for(let i=0; i<keys.length; i++) {
 
        if(keys[i] == Object.keys(...obj)) {
            obj = Object.values(...obj);
        } else return 'Invalid key';
            
    } 
    return obj[0];

}

module.exports = getValue;