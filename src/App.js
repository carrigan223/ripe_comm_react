import "./App.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ChosenCustomerComponent from "./components/ChosenCustomer/chosenCustomer";
import CustomerListComponent from "./components/CustomerList/customerList";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  const [customers, setCustomers] = useState([]);

  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setCustomers(myJson);
      });
  }


  useEffect(()=>{
    getData()
  },[])


  return (
    <MainContainer class="font-sans">
      <CustomerListComponent customers={customers} />
      <ChosenCustomerComponent />
    </MainContainer>
  );
}

export default App;
