import request from 'superagent';
import Config from '../../config.js';

var UserSource = {
  fetch: function () {
    console.log('[UserSource] fetching users');

    return new Promise(function (resolve, reject) {

      request
        .get(Config.usernetUrl + '/users')
        .set('Accept', 'application/json')
        .end(function(err, res){
          if (err) {
            console.error('[UserSource] fetching users failed', err);
            reject();
            return;
          }

          console.log('[UserSource] fetching users successful retrieved users', res);
          resolve(res);
        });
    });
  },

  add: function(user) {
    console.log('[UserSource] add user', user);

    return new Promise(function (resolve, reject) {

      request
        .post(Config.usernetUrl + '/users')
        .send(user)
        .set('Accept', 'application/json')
        .end(function(err, res){
          if (err) {
            console.error('[UserSource] fetching users failed', err);
            reject();
            return;
          }

          console.log('[UserSource] fetching users successful retrieved users', res);
          resolve(res);
        });
    });
  }
};

module.exports = UserSource;