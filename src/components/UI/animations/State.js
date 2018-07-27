function myAnimate(){
    this.state = 1;
    this.update = (type, phase) => {
      if((type === 'enter' && phase === 'end') || (type === 'leave' && phase === 'end') || (type === 'update' && phase === 'end')){
        this.state = 1;
      }else if(this.state === 1){
        this.state = 0;
      }
      console.log(`animationUpdate type: ${type} phase: ${phase} state: ${this.state}`);
    }
  }
const animationState = new myAnimate();

export default animationState;