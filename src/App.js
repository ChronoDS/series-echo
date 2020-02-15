import React from 'react';
import './App.scss';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Main} from "./components/Main";
import {Nav} from "./components/Nav";
import {Notifications} from "./components/Notifications";
import {Board} from "./components/Board";

function App() {
    return (
        <div className="App">
            <Header>
                Header Series Echo B-Ach:
            </Header>
            <Main>
                <Nav>Nav</Nav>
                <Board />
                <Notifications>
                    Notifications
                </Notifications>
            </Main>
            <Footer>
                Footer
            </Footer>
        </div>
    );
}

export default App;
