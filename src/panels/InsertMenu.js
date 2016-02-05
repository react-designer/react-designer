import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Radium from 'radium';
import Icon from '../Icon';

class InsertMenu extends Component {

  render() {
    let {currentTool, tools} = this.props;
    let keys = Object.keys(tools);

    return (
      <div style={styles.insertMenu}>
        <div style={styles.mainIcon}>
        {currentTool
          ? tools[currentTool].meta.icon
          : <Icon icon={"add"} size={30} />}
        </div>
        <ul style={styles.toolBox}>
          {keys.map((type, i) => (
            <li style={[
              styles.toolBoxItem,
              currentTool === type && styles.currentToolboxItem
              ]}
                onMouseDown={this.props.onSelect.bind(this, type)}
                key={i}>
              {tools[type].meta.icon}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const styles = {
  insertMenu: {
    position: 'absolute',
    marginTop: 0,
    marginLeft: -40,
    height: 40,
    width: 40,
    overflow: 'hidden',
    ':hover': {
      background: '#eeeff5',
      height: 'auto',
    }
  },
  toolBox: {
    margin: 0,
    padding: 0,
  },
  toolBoxItem: {
    listStyle: "none",
    padding: "5px 5px",
    ":hover": {
      background: "#ebebeb"
    }
  },
  currentToolboxItem: {
    background: "#ebebeb"
  },
  mainIcon: {
    padding: "10px 5px",
    borderBottom: "1px solid #e0e0e0"
  }

};

export default Radium(InsertMenu);