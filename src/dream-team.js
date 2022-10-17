const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let strArr = [];
  if (!Array.isArray(members)) {return false}

for (let i = 0; i < members.length; i++) {
  if ((typeof(members[i]) === 'string') && (members[i] != null)) {
    let str = members[i];
    str = str.replaceAll(' ', '').slice(0,1).toLocaleUpperCase();
    strArr.push(str)
  }
}
strArr = strArr.sort();
strArr = strArr.join('')

return strArr
}

module.exports = {
  createDreamTeam
};
