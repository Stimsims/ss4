import {get} from 'lodash';

export default class Adapter{
    constructor(data, label, xPath, yPath){
        //data is an array of objects
        //data is reformed in a series with a label and datapoints with x and y properties
        this.label = label;
        this.x = xPath;
        this.y = yPath;
        this.points = [];
        this.updateData(data);
    }
    updateData(data){
        //assumed that data is in sorted order
        //if less dp, slice of last dp until equal
        //if more dp, create new node for each additional dp
        if(data.length > this.points.length){
            let newPoints = [];
            for(let i = this.points.length; i<data.length; i++){
                let x = get(data[i], this.x);
                let y = get(data[i], this.y);
                newPoints.push(this.createPoint(x, y));
            }
            this.points = [
                ...this.points,
                ...newPoints
            ]
        }else{
            console.log("there is too little data " + data.length);
        }
    }
    createPoint(x, y){
       // console.log("creating point " + x + ", " + y);
        return {x, y}
    }
    getSeries(){
        return {
            name: this.label,
            data: this.points
        }
    }
}