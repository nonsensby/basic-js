const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  
  str: '',
  getLength() {
     return this.str.split('~~').length
  },
  addLink(value) {
    if (value === undefined) {
    if (this.str.length < 1) {
      this.str = '( )';
    } else {
      this.str = this.str + '( )';
    }
   } else {
    if (this.str.length < 1) {
      this.str = `( ${value} )`
    } else {
      this.str = this.str + `~~( ${value} )`
    }
   }
   return this
  },
  removeLink(position) {
    if (typeof(position) != 'number') {
     this.str = '';
    throw  new Error("You can't remove incorrect link!")
    }
  if (this.str.length > 0) {
      this.str = this.str.split('~~');
      if (((position-1) < 0) || (position > this.str.length)) {
      this.str = '';
      throw  new Error("You can't remove incorrect link!")
    }
      this.str.splice((position - 1), 1)
      this.str = this.str.join('~~')
      return this
     }
   
  },
  reverseChain() {
    this.str = this.str.split('~~').reverse().join('~~')
    return this
  },
  finishChain() {
    let result;
    result = this.str;
    this.str = ''
    return result
  }
};

module.exports = {
  chainMaker
};



//console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain())
//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0))
//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0))
//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'))
//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2))
//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4))
//console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain())            assert.deepEqual(chainMaker.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain(), '( NaN )~~( null )~~( true )~~( false )~~( 1.233 )');
//console.log(chainMaker.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain())
// '( NaN )~~( null )~~( true )~~( false )~~( 1.233 )');
