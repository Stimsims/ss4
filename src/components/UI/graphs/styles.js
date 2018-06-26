import colors from './../Colors.js';
import styled from "styled-components";

function getLetter(index){
    switch(index){
      case 0: return 'a';
      case 1: return 'b';
      case 2: return 'c';
      case 3: return 'd';
      case 4: return 'e';
      default:return 'a';
    }
  }
  function getColor(index){
    switch(index){
      case 0: return colors.series0;
      case 1: return colors.series1;
      case 2: return colors.series2;
      case 3: return colors.series3;
      case 4: return colors.series4;
      default:return colors.series0;
    }
  }
  /*
        stroke: ${getColor(i)} !important;
        border: 2px ${getColor(i)} solid !important;
        color: ${getColor(i)} !important;
  */
  function generateSeriesStyle(series){
    let styles = ``;
    series.map((e, i) => {
      let s = `.ct-series-${getLetter(i)} .ct-bar, .ct-series-${getLetter(i)} .ct-line, 
      .ct-series-${getLetter(i)} .ct-point, .ct-series-${getLetter(i)} .ct-slice-donut, 
      .ct-series-${i}, .ct-series-${getLetter(i)} .ct-series {
        stroke: ${getColor(i)} !important;
        color: ${getColor(i)} !important;
        stroke-width: 2px;
        font-size:0.9em;
        animation-delay: ${i/4}s;
      }`
      return styles = styles + s;
    })
    return styles;
  }

  export function genStyles(data){
      let {series}=data;
      let seriesColors = generateSeriesStyle(series);
 const Container = styled.div`
    height: 100%;
    .ct-chart{
        height: 100%;
    }
    ${seriesColors}

    .ct-labels span, .ct-axis-title {
      color: ${colors.text};
    }
    .ct-axis-title{
      stroke: white;
      stroke-width: 2px;
    }
    .ct-legend{
      list-style-type: none;
      text-align: center;
      margin: auto;
      margin-bottom:0px;
      padding: 0px;
      li {
          padding: 5px;
          margin: 0px 10px 0px 10px;
          border-radius: 25px;
          display: inline-block;
      }
    }
    .ct-label.ct-label.ct-horizontal.ct-end {
      transform-origin: 100% 0;
      transform: translate(-100%, 20px) rotate(-45deg);
    }
    `
    return Container;
  }

  /*
.ct-legend 
.ct-series-0 ct-myclass
.ct-series-1 ct-myclass2

    .ct-grids line {
      color: blue;
    }
.ct-grid line,
    .ct-vertical,
    .ct-start,
    .ct-horizontal{ 
          stroke: red !important;
          stroke-width: 1px !important;
          stroke-dasharray: 2px !important;
      }
      .ct-legend{
        list-style-type: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom:0px;
        li {
            padding: 5px;
            margin: 0px 10px 0px 10px;
            border-radius: 25px;
        }
      }
  */