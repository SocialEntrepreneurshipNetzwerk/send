import React, {Component} from 'react';
import styles from './dropdown.module.css';

class Dropdown extends Component {

  state = {
    selected: this.props.startOption,
    toggled: false
  }

  toggleList = () => {
    this.setState ( prevState => ({
      toggled: !prevState.toggled
    }));
  };


  select = (e) => {
    this.setState({selected: e.target.innerText})
    this.toggleList()
    this.props.handleUpdate(e.target.innerText)
  }

  render () {
    return (
      <div className={styles.dropdownWrapper}>
        <div className={styles.dropdownButton} onClick={this.toggleList}>{this.state.selected} </div>
        { this.state.toggled &&
            <ul className={styles.dropdownList}>
              {this.props.options.map(( option, index ) => {
                return <li key={index} onClick={this.select}>{option}</li>;
              })}
            </ul>
        }

      </div>
    )
  }


}


export default Dropdown;
