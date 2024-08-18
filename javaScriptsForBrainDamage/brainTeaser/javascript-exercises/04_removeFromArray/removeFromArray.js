const removeFromArray = function(arr, val) {
    let filtered = arr.forEach(element => {
        if(element !== val){
            filtered.push(element);
        }
    });

    return filtered;
    
};

// Do not edit below this line
module.exports = removeFromArray;
