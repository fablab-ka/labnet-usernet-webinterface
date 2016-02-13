import flux from '../flux';

import UserSource from '../sources/usersource';

class UserActions {
  add(user) {
    return (dispatch) => {
      dispatch(user);

      UserSource.add(user)
        .then(UserSource.fetch)
        .then(users => {
          this.update(users);
        })
        .catch((errorMessage) => {
          this.fetchFailed(errorMessage);
        });
    }
  }

  update(users) {
    return users;
  }

  fetch() {
    return (dispatch) => {
      dispatch();

      UserSource.fetch()
        .then(users => {
          this.update(users);
        })
        .catch((errorMessage) => {
          this.fetchFailed(errorMessage);
        });
    }
  }

  fetchFailed(errorMessage) {
    return errorMessage;
  }
}

module.exports = flux.createActions(UserActions);