import * as React from "react";
import { Global, css } from '@emotion/core';

interface AppProps {
}

interface AppState {
}

export default class App extends React.Component<AppProps, AppState> {
    render() {
        return (
            <div className="app">
                <Global
                    styles={css`
                        * {
                        color: #333;
                        font-family: helvetica-neue, helvetica, lucinda sans unicode, sans serif;
                        font-size: 12px;
                        border: none;
                        margin: 0;
                        padding: 0;
                        }
                    `}
                />
                <header>
                    <h1>Meine TODO-Liste</h1>
                </header>
            </div>
        );
    }
}
