
export function fadeIn(animObj, data){
    animObj['opacity'] = {
        begin: data.index * 10,
        dur: 1000,
        from: 0,
        to: 1,
        easing: 'easeOutQuart'
      };
    return animObj;
}
export function lineScaleUp(animObj, data){
    animObj['d'] = {
        begin: 500*data.index,
        dur: 1000,
        from: data.path.clone().scale(1, 0)
        .translate(0, data.chartRect.height())
        .stringify(),
        to: data.path.clone().stringify(),
        easing: 'easeOutQuart'
      }
    return animObj;
}
export function translate(animObj, date){
    animObj['d'] = {
        begin: 500,
        dur: 1000,
        from: data.path.clone()
        .rotate('45deg')
        .stringify(),
        to: data.path.clone().stringify(),
        easing: 'easeOutQuart'
      }
    return animObj;
}
export function heightUp(animationObj, data){
    animationObj['y1'] = {
        begin: data.index * 10,
        dur: 300,
        from: data['y2'],
        to: data['y1'],
        easing: 'easeOutQuart'
    }
    return animationObj;
}
export function widthRight(animObj, data){
    animObj['x2'] = {
        begin: data.index * 10,
        dur: 2000,
        from: data['x1'],
        to: data['x2'],
        easing: 'easeOutQuart'
      };
    return animObj;
}


/*
var delays = 80,
    durations = 500;
      var listeners={
        created: function() {
          var seq = 0;
        },
        draw: function(data){
            var animations = {};
          if(data.type === 'line' || data.type === 'area') {
            lineScaleUp(animations, data);
            //translate(animations, data);
          }else if(data.type === 'grid') {
            
            if(data.axis.units.pos === 'x'){
              heightUp(animations, data);
              //fadeIn(animations, data);
              
            }else if(data.axis.units.pos === 'y'){
                widthRight(animations, data);
            }
          }
          data.element.animate(animations);
        }
      }
*/