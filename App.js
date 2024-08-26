
// <div id="parent">
//     <div id="child">
/* <h1>i ma h1 tag</h1> */
//<h2>i am a h2 tag</h2>
//     </div>

/* <div id="child">
/* <h1>i ma h1 tag</h1> */
//<h2>i am a h2 tag</h2>
//     </div> */}
// </div> 


//ReactElement(object)=>HTML(browser understands)



const parent=React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"i am a h1 tag"),
        React.createElement("h2",{},"i am a h2 tag")
        ]),
        React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"i am a h1 tags"),
        React.createElement("h2",{},"i am a h2 tags")
            ]),
        ]);

console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


    //  const heading= React.createElement("h1",
    //     {id:"heading",xyz:"abc"},
    //     "hello world from react");
    //  const root=ReactDOM.createRoot(document.getElementById("root"));
    //  root.render(heading);

    