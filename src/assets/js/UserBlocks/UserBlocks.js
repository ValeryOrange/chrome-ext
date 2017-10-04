import React, { Component } from 'react';
import HistoryBox from '../HistoryBox/HistoryBox.js';
import SiteBox from '../SiteBox/SiteBox.js';

class UserBlocks extends Component {
  render() {
    return (
      <div className="userblocks">
        <SiteBox />
        <HistoryBox />
      </div>
    );
  }
}

export default UserBlocks;