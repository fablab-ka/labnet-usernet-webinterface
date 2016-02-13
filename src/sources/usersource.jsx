import request from 'superagent';

var UserSource = {
  fetch: function () {
    console.log('[UserSource] fetching users');

    return new Promise(function (resolve, reject) {
      request
        .get(window.configuration.usernetUrl + '/users')
        .set('Accept', 'application/json')
        .end(function(err, res){
          if (err) {
            console.error('[UserSource] fetching users failed', err);
            reject();
            return;
          }

          console.log('[UserSource] fetching users successful retrieved users', res);
          resolve(res.body);
        });
    });
  },

  add: function(user) {
    console.log('[UserSource] add user', user);

    return new Promise(function (resolve, reject) {

      request
        .post(window.configuration.usernetUrl + '/users')
        .send(user)
        .set('Accept', 'application/json')
        .end(function(err, res){
          if (err) {
            console.error('[UserSource] fetching users failed', err);
            reject();
            return;
          }

          console.log('[UserSource] fetching users successful retrieved users', res);
          resolve(res.body);
        });
    });
  }
};

module.exports = UserSource;