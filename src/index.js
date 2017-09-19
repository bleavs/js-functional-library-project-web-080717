fi = (function() {

  return {

    each: function(list, iteratee) {
      if (Array.isArray(list)) {

        for (i = 0; i < list.length; i++) {
          iteratee(list[i], i, list);
          }
        }

      else {
        var keys = Object.keys(list);
          for (i = 0; i < list.length; i++) {
            iteratee(list[keys[i]], keys[i], list);
          }
      }
      return list;
    },

    map: function(list, iteratee) {

      var keys = !Array.isArray(list) && Object.keys(list);
      var length = (keys || list).length;
      var results = Array(length);

      for (var i = 0; i < length; i++) {

        var currentKey = keys ? keys[i] : i;

        results[i] = iteratee(list[currentKey], currentKey, list);

      }
      return results;
    },

    reduce: function(list, iteratee) {
      var keys = !Array.isArray(list) && Object.keys(list);
      var length = (keys || list).length;
      var result = null;
      var adder = keys ? keys[i] : i;

      for (i = 0; i < length; i++) {
        var currentKey = keys ? keys[i] : i;
        var result = iteratee(adder, list[currentKey], currentKey, list);
      }
      return result;
    },


    find: function(list, predicate){
      for (i = 0; i < list.length; i++){
        if (predicate(list[i], i, list)) return list[i];
      }
    },

    filter: function(list, predicate){
      var results = [];
      for (i = 0; i < list.length; i++){
        if (predicate(list[i], i, list)) results.push(list[i]);
      }
      return results;
    },

    sortBy: function(list, iteratee) {

        if ( typeof list[0] === "number") {
          var sorted = list.sort(iteratee)
          return sorted;
        }

        else if (typeof list[0] === "object") {
          var values = [];

          for (var k in list) {
                  values.push(list[k]);
            }

            var work = values.sort(function(obj1, obj2){
              return obj1[iteratee].charCodeAt(0) -obj2[iteratee].charCodeAt(0);
            });
            return work;
          }
      },


    size: function(list){
      var keys = !Array.isArray(list) && Object.keys(list);
      var length = (keys || list).length;
      return length;
    },

    first: function(array){
      return array.slice(0);
    },

    last: function(array){
      return array.slice(-1)
    },

    compact: function(array){
      var results = [];
      for (i = 0; i < array.length; i++){
        if (array[i] !== false && array[i] !== null && array[i] !== "" && array[i] !== undefined && array[i] !== NaN && array[i] !== 0){
          results.push(array[i]);
        }
      }
      return results;
    },

    uniq: function(array){
      var results = [];
      for (i = 0; i < array.length; i++){
        if (!results.includes(array[i])){
          results.push(array[i]);
        }
      }
      return results;
    },

    keys: function(object){
      var keys = []
      for (var k in object) {
        keys.push(k);
      }
      return keys;
    },

    values: function(object) {
      var values = []
      for (var k in object) {

        values.push(object[k]);
      }
      return values;
    },

    functions: function(object) {
      var keys = []
      for (var k in object) {
        keys.push(k);
      }
      return keys;
    }
  }

})()
