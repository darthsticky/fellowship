import React from 'react';
const parseTime = (date) => {
  let rightNow = Date.now();
  let milliTime = (rightNow - date) / 1000;
  if (milliTime < 5) {
    return 'a few moments ago';
  } else if (milliTime < 60 && milliTime >= 5) {
    return Math.floor(milliTime) + ' seconds ago';
  } else if (milliTime > 60 && milliTime < 120) {
    return Math.floor(milliTime / 60) + ' minute ago';
  } else if (milliTime >= 120) {
    return Math.floor(milliTime / 60) + ' minutes ago';
  }
}

const BattleLogEntry = ({logentry,}) => {
  return logentry.type ?
  (<li className='logentry'>
    <div className='player'>{logentry.username} : </div>
    {logentry.message}
  </li>) :
  (<li className='logentry'>
    <div className="player">{logentry.player} : </div>
    Rolled <span className='rollSize'>{logentry.roll}</span> out of {logentry.max} with a + {logentry.bonus} {logentry.context === 'none' ? null : 'for ' + logentry.context}
  </li>);
};


export default BattleLogEntry;
