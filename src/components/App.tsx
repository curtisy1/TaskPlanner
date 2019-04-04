import * as React from "react";
import { Global, css } from '@emotion/core';
import { StyledHeader, StyledFooter, StyledSection, StyledTable, StyledTableData, StyledButtonDiv, StyledLabel, StyledInput, StyledSelect, StyledTableHead, StyledLogo } from "./styles";
import Cookies = require("js-cookie");

enum Category {
    Private = "Privat",
    Work = "Arbeit",
    School = "Schule",
}

type Task = {
    Task: string;
    Due: Date;
    Category: Category;
}

type CookeObject = {
    Task: string;
    Due: string;
    Category: string;
}

interface AppProps {
}

interface AppState {
    tasks: Task[];
}

const image = require("./../assets/Logo.jpg");

export default class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            tasks: [
                {
                    Task: "Bücher zurückbringen",
                    Due: new Date(2016, 2, 14),
                    Category: Category.Private
                },
                {
                    Task: "Projekt MS3",
                    Due: new Date(2016, 3, 12),
                    Category: Category.Work
                },
                {
                    Task: "Freunde treffen zum Spieleabend",
                    Due: new Date(2016, 3, 23),
                    Category: Category.Private
                },
            ]
        };

        this.renderTasks = this.renderTasks.bind(this);
        this.renderSelect = this.renderSelect.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        const savedCookie = Cookies.getJSON("savedTasks") as CookeObject[];
        if(!!savedCookie && savedCookie.length > 0){
            this.setState({ tasks: savedCookie.map((cookieObj) => {
                return { Task: cookieObj.Task, Due: new Date(cookieObj.Due), Category: cookieObj.Category as any };
            })
        });
        }
    }

    componentDidUpdate(){
        Cookies.set("savedTasks", this.state.tasks, { expires: 7, path: '' });
    }

    renderTasks() {
        return this.state.tasks.map((task, index) => 
            <tr key={`tableRow${index}`}>
                <StyledTableData key={`rowTask${index}`}>{task.Task}</StyledTableData>
                <StyledTableData key={`rowDate${index}`} itemType="date">{task.Due.toISOString().slice(0, 10)}</StyledTableData>
                <StyledTableData key={`rowCategory${index}`}>{task.Category}</StyledTableData>
            </tr>
        );
    }

    renderSelect(){
        return Object.values(Category).map(option =>
            <option key={option}>{option}</option>
        );
    }

    handleClick(){
        const taskValue = (document.querySelector(".large") as HTMLInputElement).value;
        const dateValue = (document.querySelector("[name='requiredBy']") as HTMLInputElement).value;
        const selectValue = (document.querySelector("select") as HTMLSelectElement).value;

        if(!!taskValue && !!dateValue && !!selectValue){
            this.setState(prevState => ({
                tasks: [...prevState.tasks, { Task: taskValue, Due: new Date(dateValue), Category: selectValue as any }]
            }));
        }
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
                        <StyledInput type="date" name="requiredBy" />
                    </div>
                    <div>
                        <StyledLabel>Kategorie</StyledLabel>
                        <StyledSelect name="task" defaultValue={Category.Private}>
                            {this.renderSelect()}
                        </StyledSelect>
                    </div>
                    <StyledButtonDiv className="buttons">
                        <a href="#" id="btnAddTask" onClick={this.handleClick}>Aufgabe speichern</a>
                    </StyledButtonDiv>
                </StyledSection>
                <StyledSection>
                    <StyledTable id="tbTasks">
                        <thead>
                            <tr>
                                <StyledTableHead>Aufgabe</StyledTableHead>
                                <StyledTableHead>bis</StyledTableHead>
                                <StyledTableHead>Kategorie</StyledTableHead>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTasks()}
                        </tbody>
                    </StyledTable>
                </StyledSection>
                <StyledFooter>
                    <a href="https://www.oszimt.de" target="_blank">
                        <StyledLogo src={image} className="logo"/>
                    </a>
                </StyledFooter>
            </div>
        );
    }
}
