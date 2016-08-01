const React = require('react');
import FaIconPack from 'react-icons/lib/fa';
import LD from 'react-icons/lib/fa/linkedin';
import GH from 'react-icons/lib/fa/github-square';
import EMAIL from 'react-icons/lib/ti/mail';

const Connect = React.createClass({

  render: function() {
    return (
      <div className="footer-column">
          <p className='by-dc'>Chef's Table: Created by Daniel Cuperman</p>
          <ul className="connect-row">
            <strong className="heading">CONNECT</strong>
            <li>
              <a href="mailto:dacuperman@gmail.com">
                <EMAIL/>
              </a>
            </li>
            <li className="linkedin">
              <a className="icon-linkedin" href="https://www.linkedin.com/in/danielcuperman">
                <LD/>
              </a>
            </li>
            <li className="git">
              <a className="icon-github-circled" href="https://github.com/DaC00P">
                <GH/>
              </a>
            </li>
          </ul>
      </div>
    );
  }

});

module.exports = Connect;
