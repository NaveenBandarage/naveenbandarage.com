import './App.css';
import React from 'react';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Bitter&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <body>
        <div id="container">
          <p>Hey, I'm Naveen.</p>
          <p>
            I'm a software engineer currently working at{' '}
            <a
              target="_blank"
              id="xero"
              href="https://www.xero.com/"
              rel="noreferrer"
            >
              Xero
            </a>
            .
          </p>
          <p>
            I've worked at places like{' '}
            <a target="_blank" id="black" href="https://www.anz.co.nz/" rel="noreferrer">
              ANZ
            </a>
            ,{' '}
            <a
              target="_blank"
              id="black"
              href="https://www.myclearhead.com/"
              rel="noreferrer"
            >
              Clearhead
            </a>
            .
          </p>
          <p>
            You can find me on{' '}
            <a
              target="_blank"
              id="black"
              href="https://www.linkedin.com/in/naveenbandarage/"
              rel="noreferrer"
            >
              LinkedIn
            </a>{' '}
            and{' '}
            <a target="_blank" id="black" href="http://twitter.com/naveenbandarage" rel="noreferrer">
              Twitter
            </a>{' '}
            and{' '}
            <a
              target="_blank"
              id="black"
              href="https://www.github.com/naveenbandarage/"
              rel="noreferrer"
            >
              GitHub
            </a>
            .
          </p>
          <p>
            Let's talk at{' '}
            <a target="_blank" id="black" href="mailto:im@naveenbandarage.com">
              im@naveenbandarage.com
            </a>
            .
          </p>
        </div>
      </body>
    </div>
  );
}

export default App;
