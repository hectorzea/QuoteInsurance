import React from 'react';
import styled from "@emotion/styled";
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const Message = styled.p`
  background-color: rgb(127,224,237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const TotalQuote = styled.div`
text-align: center;
padding: .5rem;
border: 1px solid #26C6DA;
background-color: rgb(127,224,237);
margin-top: 1rem;
position: relative;
`;

const QuoteText = styled.p`
  color: #00838F;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Total = ({quote}) => {

    return (
        (quote === 0) ? <Message>Pick brand, plan and year</Message> :
            (
                <TotalQuote>
                    <TransitionGroup component="p" className="resultado">
                        <CSSTransition timeout={{enter: 500, exit: 500}} key={quote} classNames="resultado">
                            <QuoteText>The total is: {quote}</QuoteText>
                        </CSSTransition>
                    </TransitionGroup>
                </TotalQuote>
            )
    );
};

export default Total;
