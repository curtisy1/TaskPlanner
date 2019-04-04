import * as React from "react";
import { Global, css } from '@emotion/core';
import { StyledHeader, StyledFooter, StyledSection, StyledTable, StyledTableData, StyledButtonDiv, StyledLabel, StyledInput, StyledSelect, StyledTableHead, StyledLogo } from "./styles";

enum Category {
    Privat,
    Arbeit,
    Schule,
};

type Task = {
    Task: string;
    Due: Date;
    Category: Category;
}

interface AppProps {
}

interface AppState {
    tasks: Task[];
}

export default class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            tasks: [
                {
                    Task: "Bücher zurückbringen",
                    Due: new Date("2016-03-14"),
                    Category: Category.Privat
                },
                {
                    Task: "Projekt MS3",
                    Due: new Date("2016-04-12"),
                    Category: Category.Arbeit
                },
                {
                    Task: "Freunde treffen zum Spieleabend",
                    Due: new Date("2016-04-23"),
                    Category: Category.Privat
                },
            ]
        };

        this.renderTasks = this.renderTasks.bind(this);
    }

    renderTasks() {
        return this.state.tasks.map(task => 
            <tr>
                <StyledTableData>{task.Task}</StyledTableData>
                <StyledTableData itemType="date">{task.Due.toDateString()}</StyledTableData>
                <StyledTableData>{task.Category}</StyledTableData>
            </tr>
        );
    }

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
                <StyledHeader>
                    <h1>Meine TODO-Liste</h1>
                </StyledHeader>
                <StyledSection>
                    <div>
                        <StyledLabel>Aufgabe</StyledLabel>
                        <StyledInput type="text" className="large" name="task" placeholder="Do Be Do Be Do" />
                    </div>
                    <div>
                        <StyledLabel>erledigt bis</StyledLabel>
                        <StyledInput type="date" name="requiredBy" placeholder="tt.mm.jjjj" />
                    </div>
                    <div>
                        <StyledLabel>Kategorie</StyledLabel>
                        <StyledSelect name="task">
                            <option selected={true}>Privat</option>
                            <option>Arbeit</option>
                            <option>Schule</option>
                        </StyledSelect>
                    </div>
                    <StyledButtonDiv className="buttons">
                        <a href="#" id="btnAddTask">Aufgabe speichern</a>
                    </StyledButtonDiv>
                </StyledSection>
                <StyledSection>
                    <StyledTable id="tbTasks">
                        <thead>
                            <StyledTableHead>Aufgabe</StyledTableHead>
                            <StyledTableHead>bis</StyledTableHead>
                            <StyledTableHead>Kategorie</StyledTableHead>
                        </thead>
                        <tbody>
                            {this.renderTasks()}
                        </tbody>
                    </StyledTable>
                </StyledSection>
                <StyledFooter>
                    <a href="https://www.oszimt.de">
                        <StyledLogo src={"./../Logo.jpg"} className="logo"/>
                    </a>
                </StyledFooter>
            </div>
        );
    }
}
