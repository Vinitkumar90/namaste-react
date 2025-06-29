
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },  //go as an attribute
  "hello world from react"  //as an child (children of h1)
);

console.log(heading); //object ,(react element)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); //job is to take the react element (js object) and convert into -> html element(browser understands)
//render it to the dom as html




// const link = React.createElement("a",{href:"www.youtube.coc",target:"_blank"})

// //jsx equivalent code
// <a href="https://google.com" target="_blank" rel="noopener noreferrer">
//   Go to Google
// </a>
