class FocusOrder {
  
  constructor(strSelector=null) {
    this.nextElements = new Map();//Map for save order
    this.init=false;
    
    if(strSelector) {
      this.initOrder(strSelector);
    }
  }
  
  initOrder(strSelector) {
    
    if (this.init) {
      console.log('already initialized');
      return;
    }
    
    this.init = true;
    
    let target = document.querySelectorAll(strSelector);

    let wk1 = [];
    for (let i = 0; i < target.length; i++) {
      // minus value is ignore
      if (target[i].dataset.order) {
        if (0 <= target[i].dataset.order) {
          wk1.push(target[i]);
        }
      } else {
        //if order not set then last
        target[i].dataset.order= Number.MAX_SAFE_INTEGER;
        wk1.push(target[i]);
      }
    }
    
    //sort
    let wk2=wk1.sort((a,b) => {
      if (a.dataset.order == b.dataset.order) {
        return 0;
      } else if(a.dataset.order > b.dataset.order) {
        return 1;
      } else {
        return -1;
      }
    });
    
    //element mapping
    for (let i =0; i < wk2.length-1; i++) {
      this.nextElements.set(wk2[i],wk2[i+1]);
    }
    this.nextElements.set(wk2[wk2.length-1],wk2[0]);
    
    //set focus event
    const keyevent = event => {
      if (event.key === 'Enter') {
        event.preventDefault();//stop default event
      	if (event.srcElement) {
        	if (event.srcElement.tagName.toLowerCase().startsWith('textarea')) {
              if (event.altKey==true) {
                //If Enter with ALT, insert \n 
                const intPosition = event.srcElement.selectionStart;
                const wk = event.srcElement.value;
                event.srcElement.value=wk.substring(0,intPosition)+'\n'+wk.substring(intPosition);
                //correct position
                event.srcElement.selectionStart=intPosition+1;
                event.srcElement.selectionEnd=intPosition+1;
                return;
              }
            }
        }
        let elTarget = event.target;
				for(let i = 0, max=this.nextElements.size; i < max; i++) {
					let elWk = this.nextElements.get(elTarget)
					if (elWk.disabled || elWk.getBoundingClientRect().width == 0) {
						//if element is disabled or not visible then goto next element 
						elTarget=elWk;
					} else {
						elWk.focus();
						break;
					}
				}
      }
    };
    
    for (let i =0; i < wk2.length; i++) {
      wk2[i].onkeydown=function(event){keyevent(event)};
    }
  }
};

