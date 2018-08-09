import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

class SearchBarExample extends React.Component {
  state = {
    value: '',
  };
  componentDidMount() {
    this.autoFocusInst.focus();
  }
  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  }
  render() {
    return (
    <div>
      <SearchBar placeholder="Search" maxLength={8} />
    </div>);
  }
}