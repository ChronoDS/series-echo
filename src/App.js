import React from 'react';
import './App.scss';
import {Header} from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header className="App-header">
                Header Series Echo B-Ach:
            </Header>
            <article className='Article'>
                Article
            </article>
            <nav>Nav</nav>
            <aside>Aside</aside>
            <footer>Footer</footer>
        </div>
    );
}

export default App;
