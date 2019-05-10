import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Icon from '../Icon';

class InsertMenu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      menuOpened: false,
      hoveredTool: null
    }
  }

  openMenu = () => {
    this.setState({menuOpened: true})
  }

  closeMenu = () => {
    this.setState({menuOpened: false})
  }

  hoverTool = type => {
    this.setState({hoveredTool: type})
  }

  unhoverTool = type => {
    if (this.state.hoveredTool == type) {
      this.setState({hoveredTool: null})
    }
  }

  render() {
    let {currentTool, tools} = this.props;
    let {menuOpened, hoveredTool} = this.state;
    let keys = Object.keys(tools);

    return (
      <div style={{
          ...styles.insertMenu,
          ...menuOpened ? styles.insertMenuHover : {}
        }}
        onMouseOver={this.openMenu}
        onMouseOut={this.closeMenu}
      >
        <div style={styles.mainIcon}>
        {currentTool
          ? tools[currentTool].meta.icon
          : <Icon icon={"add"} size={30} />}
        </div>
        <ul style={styles.toolBox}>
          {keys.map((type, i) => (
            <li style={{
                  ...styles.toolBoxItem,
                  ...currentTool === type ? styles.currentToolboxItem : {},
                  ...hoveredTool === type ? styles.currentToolboxItem : {}
                }}
                onMouseOver={() => this.hoverTool(type)}
                onMouseOut={() => this.unhoverTool(type)}
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
    height: 40,
    width: 40,
    overflow: 'hidden',
  },
  insertMenuHover: {
    background: '#eeeff5',
    height: 'auto',
  },
  toolBox: {
    margin: 0,
    padding: 0,
  },
  toolBoxItem: {
    listStyle: "none",
    padding: "5px 5px"
  },
  currentToolboxItem: {
    background: "#ebebeb"
  },
  mainIcon: {
    padding: "10px 5px",
    borderBottom: "1px solid #e0e0e0"
  }

};

export default InsertMenu;
