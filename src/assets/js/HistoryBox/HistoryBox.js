import React, { Component } from 'react';
import './HistoryBox.css';

class HistoryBox extends Component {
  state = {
    items: [
      {
        key: "history",
        href: "chrome://history/",
        content: "История",
      },

      {
        key: "bookmarks",
        href: "chrome://bookmarks/",
        content: "Избранное",
      },

      {
        key: "downoloads",
        href: "chrome://downloads/",
        content: "Загрузки",
      }
    ]
  };
  render() {
    return (
      <div className="historybox">
        <ul className="historybox-items">
          {
            this.state.items.map((value) => {
              return (
                <li className="historybox-item" key={value.key}>
                  <a className="historybox-link" href={value.href} target="_blank" key={value.key} >{value.content}</a>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default HistoryBox;