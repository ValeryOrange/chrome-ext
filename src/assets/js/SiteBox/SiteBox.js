import React, { Component } from 'react';
import './SiteBox.css';

class SiteBox extends Component {
  state = {
    items: [
      {
        key: "site1",
        name: "site1",
        href: "url1",
        icon: "iconurl1",
        x: "",
        y: "",
        order: 1,
      },
      {
        key: "site2",
        name: "site2",
        href: "url2",
        icon: "iconurl2",
        x: "",
        y: "",
        order: 2,
      },
      {
        key: "site3",
        name: "site3",
        href: "url3",
        icon: "iconurl3",
        x: "",
        y: "",
        order: 3,
      },
      {
        key: "site4",
        name: "site4",
        href: "url4",
        icon: "iconurl4",
        x: "",
        y: "",
        order: 4,
      },
      {
        key: "site5",
        name: "site5",
        href: "url5",
        icon: "iconurl5",
        x: "",
        y: "",
        order: 5,
      },
      {
        key: "site6",
        name: "site6",
        href: "url6",
        icon: "iconurl6",
        x: "",
        y: "",
        order: 6,
      },
      {
        key: "site7",
        name: "site7",
        href: "url7",
        icon: "iconurl7",
        x: "",
        y: "",
        order: 7,
      },
      {
        key: "site8",
        name: "site8",
        href: "url8",
        icon: "iconurl8",
        x: "",
        y: "",
        order: 8,
      }
    ]
  }

  render() {
    return (
      <div className="sitebox"> 
        <div className="sitebox-title">Недавно посещенные сайты</div>
        <ul className="sitebox-items">
          {
            this.state.items.map((value) => {
              const iconKey = `${value.key}_icon`;
              const nameKey = `${value.key}_name`;
              return (
                <li className="sitebox-item js-sitebox-item" key={value.key} draggable>
                  <a className="sitebox-link" href={value.href} target="_self" key={value.key} >
                    <span className="sitebox-icon" style={{'backgrounImage': value.icon}} key={iconKey} ></span>
                    <span className="sitebox-name" key={nameKey}>{value.name}</span>
                  </a>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default SiteBox;