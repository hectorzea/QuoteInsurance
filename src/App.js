import React, {useState} from 'react';
import styled from "@emotion/styled";
import Header from "./components/Header";
import Form from "./components/Form";
import Resume from "./components/Resume";
import Total from "./components/Total";
import Spinner from "./components/Spinner";

const Container = styled.div`
max-width: 600px;
margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #FFF;
  padding:3rem
`;

function App() {

    const [resume, setResume] = useState({
        quote: 0,
        data: {
            marca: '',
            plan: '',
            year: ''
        }
    });

    const [loading, setLoading] = useState(false);

    const {quote, data} = resume;


    return (
        <Container>
            <Header title="Insurance Quote"/>
            <FormContainer>
                <Form setLoading={setLoading} resume={resume}
                      setResume={setResume}/>
                {loading ? <Spinner/> : null}

                <Resume data={data}/>
                {!loading ? <Total quote={quote}/> : null}

            </FormContainer>
        </Container>

    );
}

export default App;
