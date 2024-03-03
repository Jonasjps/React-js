import React from "react";

const BemVindo = props => {
    return(
        <div>
            <h2>Bem-Vindo(a): {props.name}</h2>
            <h3>Tenho {props.age} anos </h3>
        </div>
    );
}

function App () {
    return (
        <div>
            <h1>Social Midea</h1>
            <BemVindo name="Jonas" age="28" />
            <BemVindo name="Virginia" age="30" />
            <p>Estou aprendsendo a desenvolver com react-js</p>
        </div>
    );
}

export default App;