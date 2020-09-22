import React, {useState} from 'react';
import styled from "@emotion/styled";
import {obtainDiferenceByYear, calculateBrand, calculatePlan} from '../Helper'

const Field = styled.div`
display: flex;
margin-bottom: 1rem;
align-items: center;
`;

const Label = styled.label`
flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: solid 1px #e1e1e1;
  -webkit-appearance: none ;
`;

const InputRadio = styled.input`
margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;
    &:hover{
    background-color: #26C6DA;
      cursor: pointer;
    }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  margin-bottom: 2rem;
  text-align: center;
`;

const Form = ({resume, setResume, setLoading}) => {

    const [data, setData] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [error, setError] = useState(false);

    const {marca, year, plan} = data;

    const saveInfo = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    };

    const quoteInsurance = (e) => {
        e.preventDefault();
        if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
            setError(true);
            return
        }
        setError(false);
        //set base
        let total = 2000;

        //take difference between years
        const diference = obtainDiferenceByYear(year);
        //for each year rest 3%
        total -= ((diference * 3) * total) / 100;

        //american 15%
        //asian 5%
        //european 30%
        total = calculateBrand(marca) * total;


        //basic increase 20%
        //complete increase 50%

        const incrementOfPlan = calculatePlan(plan);
        total = parseFloat(incrementOfPlan * total).toFixed(2);
        console.log(total);
        //total
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setResume({
                data,
                quote: total
            })
        }, 3000);
    };

    return (
        <form onSubmit={quoteInsurance}>
            {error ? <Error>All fields are required</Error> : null}
            <Field>
                <Label htmlFor="">Brand</Label>
                <Select onChange={saveInfo} name="marca" value={marca} id="">
                    <option value="">--Select an option--</option>
                    <option value="americano"> American</option>
                    <option value="europeo"> European</option>
                    <option value="asiatico"> Asian</option>
                </Select>
            </Field>
            <Field>
                <Label htmlFor="">Year</Label>
                <Select onChange={saveInfo} name="year" value={year} id="">
                    <option value="">--Select an option--</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>
            <Field>
                <Label htmlFor="">Plan</Label>
                <InputRadio onChange={saveInfo} type="radio" name="plan" checked={plan === "basico"}
                            value="basico"/> Basic
                <InputRadio onChange={saveInfo} type="radio" name="plan" checked={plan === "completo"}
                            value="completo"/> Complete
            </Field>
            <Button type="submit">Quote</Button>
        </form>
    );
};

export default Form;
