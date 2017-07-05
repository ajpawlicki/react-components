let GroceryList = () => (
  <ul>
    <GroceryListItem item={'Nail Clippers'}/>
    <GroceryListItem item={'Socks'}/>
  </ul>
);

let GroceryListItem = (props) => (
  <li>{props.item}</li>
);

let Socks = () => (
  <li>Socks</li>
);

let NailClippers = () => (
  <li>Nail Clippers</li>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));