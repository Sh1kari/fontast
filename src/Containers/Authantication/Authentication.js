const AuthLogin = PassedComponent => {
  class Authentication extends Component {
    static propTypes = {
      checkIfUserLoggedInAction: PropTypes.func.isRequired,
      doLoginAction: PropTypes.func.isRequired
    };

    constructor() {
      super();

      this.state = {
        username: '',
        password: ''
      };

      this.handleOnChange = this.handleOnChange.bind(this);
      this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnChange(e) {
      const { name, value } = e.target;
      this.setState({
        [name]: value
      });
    }

    handleOnSubmit(e) {
      e.preventDefault();
      const { username, password } = this.state;
      const data = {
        username,
        password
      };

      this.props.doLoginAction(data);
    }

    render() {
      const { username, password } = this.state;
      return (
        <PassedComponent
          username={username}
          password={password}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
        />
      );
    }
  }
};

export default AuthLogin;
