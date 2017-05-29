var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: "This is from the default prop."
    }
  },
  onButtonClick: function (e) {
    e.preventDefault();
    var name = this.refs.name.value;
    alert(name); 
  },
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name" />
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var firstName = "Harshit";
var customMessage = "This is from a component."

ReactDOM.render(
  <Greeter name={firstName} message={customMessage}/>,
  document.getElementById('app')
);
