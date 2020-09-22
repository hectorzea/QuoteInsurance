import React, {Fragment} from 'react';
import styled from "@emotion/styled";
import {firstLetterUpper} from "../Helper";

const ResumeContainer= styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838F;
  color: #FFF;
  margin-top: 1rem;
`;

const Resume = ({data}) => {

    const {marca, year, plan} = data;
    if (marca === "" || year === "" || plan === "") return null;

    return (
        <ResumeContainer>
            <h2>Quote Resume</h2>
            <ul>
                <li>Brand:{firstLetterUpper(marca)}</li>
                <li>Plan:{firstLetterUpper(plan)}</li>
                <li>Year of de car:{year}</li>
            </ul>
        </ResumeContainer>

    );

};

export default Resume;
