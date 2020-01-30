import React from 'react';
import logo from './logo.svg';
import './App.css';

function mkNode(name, children) {
    console.log("created node, ", name);
    return ({
        name: name,
        children: children
    });
};

const data = mkNode("one", [
    mkNode("twoA", null),
    mkNode("twoB", null),
    mkNode("twoC",
    [
        mkNode("threeB", null),
        mkNode("threeA", [
            mkNode("go deep", [
                mkNode("more right", [
                    mkNode("gotta love recursion", null),
                ]),
                mkNode("fun", null),
            ]),
            mkNode("another leaf 1", null),
            mkNode("another leaf 2", null),
            mkNode("another leaf 3", null),
        ]),
    ])
]);

function showNodes(node) {
    if (!node.children) {
        return <li>{node.name}</li>
    }
    let list = [];
    for (let i=0; i<node.children.length; i++) {
        list.push(showNodes(node.children[i]));
    }
    return (<div><h3>{node.name}</h3><ul>{list}</ul></div>);
}


function App() {
    return showNodes(data);
}

export default App;
