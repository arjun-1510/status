import Table from './Table';
import React from "react";
import { useHistory } from "react-router-dom";



function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <div>
      
      
      <Table />
      
      
    
      
      
    </div>
  );
}

export default HomeButton;