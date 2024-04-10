const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
// const h2=React.createElement('h2',{},"JSX and Babel");
const h2=<h2>JSX and Babel</h2>; //this line give error until we not use babel using cdn or npm
root.render(h2);