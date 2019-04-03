import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';

export const StyledHeader = styled.header`
    background-color: #d1e0e1;
    height: 80px;
    h1 {
        font-size: 20px;
        font-weight: bold;
        line-height: 80px;
        text-align: center;
    };
`;

export const StyledFooter = styled.footer`
    background-color: #d1e0e1;
    font-size: 12px;
    height: 60px;
    line-height: 80px;
    margin-top: 30px;
    text-align: center;
`;

export const TableStyles = css({
    border: "1px solid #888"
});

export const StyledSection = styled.section`
    margin: 20px 0 0 20px;
`;

export const StyledTable = styled.table`
    ${TableStyles};
    border-collapse: collapse;
    width: 90%;
`;

export const TableHeaderStyles = css({
    backgroundColor: "#53777A",
    fontSize: "12px",
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: "30px"
});

export const StyledTableData = styled.td`
    ${TableStyles};
    font-size: 11px;
    line-height: 25px;
    padding-left: 10px;
`;

export const StyledButton = styled.button`
    margin: 15px 0px 10px 0px;
    a {
        background-color: #53777A;
        ${TableStyles};
        color: #FFF;
        font-size: 13px;
        padding: 5px 10px;
        text-align: center;
        width: 80px;
        text-decoration: none;
    };
`;

export const StyledLabel = styled.label`
    color: #333;
    padding: 8px 0 8px 0;
    display: block;
`;

export const StyledInput = styled.input`
    border: 1px solid #AAA;
    height: 24px;
    padding: 0 7px;
    .large {
        width: 400px;
    }
`;

export const StyledSelect = styled.select`
    border: 1px solid #AAA;
    margin-right: 15px;
    width: 200px;
`;

export const StyledLogo = css({
    marginTop: "3px"
});