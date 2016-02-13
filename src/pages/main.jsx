import React from 'react';

import UserActions from '../actions/useractions';
import UserStore from '../stores/userstore';

class MainPage extends React.Component {
  static propTypes = {
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);

    this.state = {
      users: UserStore.getUsers(),
      errorMessage: UserStore.getErrorMessage(),
      userListLoading: UserStore.getLoading()
    };
  }

  onAddUserClicked() {
    UserActions.add({ name: 'User ' + (this.state.users.length + 1) });
  }

  componentDidMount() {
    this.onChange = this.onChange.bind(this);
    UserStore.listen(this.onChange);

    UserActions.fetch();
  }

  componentWillUnmount() {
    UserStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState({
      users: state.users
    });
  }

  renderUser(user) {
    return <li key={user.name}>{user.name}</li>;
  }

  render() {
    console.log('[MainPage] render', this.state.users);

    let content;

    if (this.state.errorMessage) {
      content = <div className="error-message">{this.state.errorMessage}</div>;
    } else if (this.userListLoading) {
      content = <div className="loader">Loading...</div>;
    } else if (this.state.users.length <= 0) {
      content = <div className="info-message">No Users defined yet</div>;
    } else {
      content = <ul className="user-list">
                  {this.state.users.map(this.renderUser.bind(this))}
                </ul>;
    }

    return (
      <div className="main-page">
        <div className="main-header">
          <h1>Users</h1>

          <div className="controls">
            <button onClick={this.onAddUserClicked.bind(this)}>Add User</button>
          </div>
        </div>

        {content}
      </div>
    );
  }
}

export default MainPage;