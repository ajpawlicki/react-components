// var GroceryList = () => (
//   <ul>
//     <li>Socks</li>
//     <li>PS4</li>
//   </ul>
// );

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'none'
    };

    return (
      <li style={style} onClick={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  }
}

var App = (props) => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['Socks', 'PS4', 'Giirlfriend', 'More Socks!!!']}/>
  </div>
)  

var GroceryList = (props) => (
  <ul>
  {props.items.map(item => 
    <GroceryListItem item={item}/>
    )}
  </ul>
)

ReactDOM.render(<App />, document.getElementById("app"));




