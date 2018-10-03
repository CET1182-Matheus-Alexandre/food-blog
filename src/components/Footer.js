import React from 'react';

function Footer() {
  return (
    <div>
      <footer>
        <h3>Criado Por:</h3>
        <ul>
          <li>
            Alexandre Pedrecal
            <br />
            <div className="footer-icons">
              <a href="https://github.com/pedrecal">
                <img alt="github logo" src="assets/images/github.png" />
              </a>
              <a href="https://twitter.com/pedr3cal">
                <img alt="twitter logo" src="assets/images/twitter.png" />
              </a>
            </div>
          </li>
          <li>
            Matheus Almeida <br />
            <div className="footer-icons">
              <a href="https://github.com/matalmeida">
                <img alt="github logo" src="assets/images/github.png" />
              </a>
              <a href="https://twitter.com/mat_almeida">
                <img alt="twitter logo" src="assets/images/twitter.png" />
              </a>
            </div>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
