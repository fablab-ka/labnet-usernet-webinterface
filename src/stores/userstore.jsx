var flux = require('../flux');
var UserActions = require('../actions/useractions');

class UserStore {
  constructor() {
    this.users = [];

    this.errorMessage = null;
    this.loading = false;

    this.bindListeners({
      handleAddUser: UserActions.add,
      handleUpdateUsers: UserActions.update,
      handleFetchUsers: UserActions.fetch,
      handleFetchUsersFailed: UserActions.fetchFailed
    });
  }

  static getUsers() {
    var { users } = this.getState();
    var result = [];

    for (var i in users) {
      result.push(users[i]);
    }

    return result;
  }

  static getErrorMessage() {
    var { errorMessage } = this.getState();
    return errorMessage;
  }

  static getLoading() {
    var { loading } = this.getState();
    return loading;
  }

  handleAddUser(user) {
    console.log('[UserStore] handleAddUser', user);

    this.users.push(user);
  }

  handleUpdateUsers(users) {
    console.log('[UserStore] handleUpdateUsers');

    this.users = users;
    this.errorMessage = null;
    this.loading = false;
  }

  handleFetchUsers() {
    console.log('[UserStore] handleFetchUsers');

    // reset the array while we're fetching new users so React can
    // be smart and render a spinner for us since the data is empty.
    this.users = [];
    this.loading = true;
  }

  handleFetchUsersFailed(errorMessage) {
    console.log('[UserStore] handleFetchUsersFailed', errorMessage);

    this.errorMessage = errorMessage;
  }
}

module.exports = flux.createStore(UserStore, 'UserStore');