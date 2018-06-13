import {get} from 'lodash';

export default class Adapter{
    constructor(data, label, xPath, yPaths){
        //data is an array of objects
        //data is reformed in a series with a label and datapoints with x and y properties
        this.label = label;
        this.x = xPath;
        this.y = yPaths;
        this.series = [];
        yPaths.map(e=>{
            this.series.push([]);
        })
        this.labels = [];
        this.updateData(data);
    }
    updateData(data){
        //assumed that data is in sorted order
        //if less dp, slice of last dp until equal
        //if more dp, create new node for each additional dp
        if(data.length > this.labels.length){
            for(let i = this.labels.length; i<data.length; i++){
                let x = get(data[i], this.x);
                this.labels.push(x);
                this.y.map((e, yIndex) => {
                    let y = get(data[i], e);
                    let ray = this.series[yIndex];
                    ray.push(y);
                })
            }
          //  console.log("adapter labels " + this.labels);
        }else{
          //  console.log("there is too little data " + data.length);
        }
    }
    createPoint(x, y){
       // console.log("creating point " + x + ", " + y);
        return {x, y}
    }
    getSeries(){
        return {
            name: this.label,
            labels: this.labels,
            series: this.series
        }
    }
}