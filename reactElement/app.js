const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
// const h1=React.createElement('h1',{className:'heading1',id:'first-heading'},"Heading1")
const h1 = React.createElement(
  "section",
  { className: "heading-section", id: "first-heading" },
  [
    React.createElement(
      "h1",
      { className: "heading1", id: "heading" },
      "My name"
    ),
    React.createElement(
      "h1",
      { className: "heading1", id: "heading" },
      "My Last name"
    ),
  ]
);
root.render(h1);
