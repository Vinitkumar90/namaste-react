/**
 *
 * <div id="parent">
 *  <div id="child">
 *      <h1>I am h1 tag</h1>
 *  </div>
 * </div>
 *
 */

/**
 *
 * <div id="parent">
 *  <div id="child">
 *      <h1>I am h1 tag</h1>
 *      <h2>I am h2 tag</h2>
 *  </div>
 * </div>
 *
 *
 * <div id="parent">
 *  <div id="child 1">
 *      <h1>I am h1 tag</h1>
 *      <h2>I am h2 tag</h2>
 *  </div>
 *  <div id="child 2">
 *      <h1>I am h1 tag</h1>
 *      <h2>I am h2 tag</h2>
 *  </div>
 * </div>
 */

const parent1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {id:"hey",style:{backgroundColor:"lightblue",padding:"5px"}}, "I am h1 tag")
  )
);


const parent2 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ])
);

//ugly : react making my life ugly  --> that is why there is JSX

const parent3 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "iam h1 tag"),
    React.createElement("h2", {}, "iam h2 tag"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "iam h1 tag"),
    React.createElement("h2", {}, "iam h2 tag"),
  ]),
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent1);
