import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste vinit be focused🚀"
);

console.log(heading); //object

//JSX - HTML-Like or XML-Like syntax
const jsxHeading = <h1 className="hello">Namaste vinit be focused🚀</h1>;

console.log(jsxHeading); //object

//React component (functional compoent returns -> jsx -> React.createElement() -> (object)react element)
const HeadingComponent1 = () => {
  return <h1>vinit functional component</h1>;
};

const fn = () => <h1 className="heading">vinit functional component</h1>;

const fn1 = () => {
  return <h1 className="heading">vinit functional component</h1>;
};

const Title = () => <h1 className="head">Namaste React using JSX🚀</h1>;

const tit = <h1>hi this is something written.</h1>; //put this react element(jsx) in the component

const elem = <span>React element</span>
//put react element inside other react other element

const someTitle = (
  <h1 className="head" tabIndex="1">
    {elem}
    {/* can also <HeadingComponent/> component inside this jsx or reactElement(someTitle) */}
  </h1>
)

const number = 1000;

const HeadingComponent = () => (
  <div id="container">
    {/* <Title/> this is component composition */}
    {number}
    <h2>{number}</h2>
    <h2>{100 + 200}</h2>
    {console.log("bhai jsx mai bhi console.log krdiya")}
    {tit}
    {someTitle}
    <Title></Title>
    <Title />
    {Title()}
    <h1>so this is a functional compoent vinit,,,returing jsx</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeadingComponent />);
