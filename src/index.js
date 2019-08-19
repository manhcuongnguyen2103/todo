import React, { Component }from "react";
import ReactDOM from "react-dom";
import "./index.css";

const itemsReact = [
  {
        id: 1,
        title: "Example",
        content: [
            {
                displayText: "Source",
                url: "https://github.com/tastejs/todomvc/tree/gh-pages/examples/react"
            }
        ]
  },
  {
    id: 2,
    title: "React + Backbone.js",
    content: [
        {
            displayText: "Demo",
            url: "http://todomvc.com/examples/react-backbone/"
        },
        {
            displayText: "Source",
            url: "https://github.com/tastejs/todomvc/tree/gh-pages/examples/react-backbone"
        }
    ]
  },
  {
    id: 3,
    title: "Scala.js + React",
    content: [
        {
            displayText: "Demo",
            url: "http://todomvc.com/examples/scalajs-react/#/"
        },
        {
            displayText: "Source",
            url:
            "https://github.com/tastejs/todomvc/tree/gh-pages/examples/scalajs-react"
        }
    ]
  },
  {
    id: 4,
    title: "TypeScript + React",
    content: [
        {
            displayText: "Demo",
            url: "http://todomvc.com/examples/typescript-react/#/"
        },
        {
            displayText: "Source",
            url: "https://github.com/tastejs/todomvc/tree/gh-pages/examples/typescript-react"
        }
    ]
  },
  {
    id: 5,
    title: "React + Alt",
    content: [
        {
            displayText: "Demo",
            url: "http://todomvc.com/examples/react-alt/#/"
        },
        {
            displayText: "Source",
            url:
            "https://github.com/tastejs/todomvc/tree/gh-pages/examples/react-alt"
        }
    ]
  }
];

const Resources = [
    {
        id: 1,
        displayText: "Tutorial",
        url: "https://reactjs.org/tutorial/tutorial.html"
    },
    {
        id: 2,
        displayText: "Philosophy",
        url: "https://www.quora.com/q/llhoiiinaejsjbmt/React-Under-the-Hood"
    },
    {
        id: 3,
        displayText: "Support",
        url: "https://reactjs.org/community/support.html"
    },
    {
        id: 4,
        displayText: "Flux architecture example",
        url: "https://github.com/facebook/flux/tree/master/examples/flux-todomvc"
    }
];

const Community = [
    {
        id: 1,
        displayText: "ReactJS on Stack Overflow",
        url: "https://stackoverflow.com/questions/tagged/reactjs"
    },
    {
        id: 2,
        displayText: "Google Groups Mailing List",
        url: "https://groups.google.com/forum/#!forum/reactjs"
    },
    {
        id: 3,
        displayText: "IRC",
        url: "irc://chat.freenode.net/reactjs"
    }
];

function MenuList(props) {
  return (
    <dl>
      {props.map(r => {
        return (
          <React.Fragment key={r.id}>
            <div>
              <a href={r.url}>{r.displayText}</a>
            </div>
          </React.Fragment>
        );
      })}
    </dl>
  );
}

function ReactList(props) {
  return (
    <dl>
      {props.map(i => {
        return (
          <React.Fragment key={i.id}>
            <dt>{i.title}</dt>
            <div1>
              {i.content.map((item, index, arr) => {
                return (
                  <a href={item.url}>
                    {item.displayText}
                    {index === arr.length - 1 ? " " : ", "}
                  </a>
                );
              })}
            </div1>
          </React.Fragment>
        );
      })}
    </dl>
  );
}

function Title(props) {
  return (
    <div>
        <h3>{props}</h3>
    </div>
  );
}

function Description() {
  return (
    <div>
        <h3>
            React is a JavaScript library for creating user interfaces. Its core
            principles are declarative code, efficiency, and flexibility. Simply
            specify what your component looks like and React will keep it up-to-date
            when the underlying data changes.
        </h3>
        <div>
            <a href="https://reactjs.org/" className="SignNature">
            React
            </a>
        </div>
    </div>
  );
}


function App() {
  return (
    <div className="ColContainer">
        <div className="LeftCol">
            {Title("React")}
            {ReactList(itemsReact)}
            {Description()}
            {Title("Official Resources")}
            {MenuList(Resources)}
            {Title("Community")}
            {MenuList(Community)}
        </div>
        <div className="RightCol">
            <div className="Control">
                <input type="text" className="Input"/>
            </div>
        </div>
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
