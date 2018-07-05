
//loop through object properties, if they == true for filter, add item to array
export const groupObjValues = (obj, filter) => {
    let ray = []
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if(filter(obj)){
                ray.push(obj[prop]);
            }
        }
    }
    console.log("grouped object values", ray);
    return ray;
}