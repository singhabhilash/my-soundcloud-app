import SC from 'node-soundcloud';

export function getPlayer(track) {
  return new Promise(function (resolve, reject) {
    SC.stream(track)
      .then(function (player) {
        if(player.options.protocols[0] === 'rtmp') 
          player.options.protocols.splice(0, 1);
        resolve(player);
      })
      .catch(err => reject(err));
  });
}