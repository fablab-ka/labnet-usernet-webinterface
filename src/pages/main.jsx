import React from 'react';

class MainPage extends React.Component {
  static propTypes = {
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  onAddUserClicked() {
    let users = this.state.users;

    users.push({ name: 'User ' + (this.state.users.length + 1) });

    this.setState({ users });
  }

  componentDidMount() {
  }

  renderUser(user) {
    return <li key={user.name}>{user.name}</li>;
  }

  render() {

    return (
      <div className="main-page">
        <h1>Users</h1>

        <div className="controls">
          <button onClick={this.onAddUserClicked.bind(this)}>Add User</button>
        </div>

        <ul className="user-list">
          {this.state.users.map(this.renderUser.bind(this))}
        </ul>
      </div>
    );
  }
}

export default MainPage;