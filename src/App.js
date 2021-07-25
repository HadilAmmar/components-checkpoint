import React from "react";
import FullName from '../src/component/profile/FullName';
import Address from '../src/component/profile/Address';
import ProfilePhoto from '../src/component/profile/ProfilePhoto';
import './App.css';
function App() {
  return (
    <div className="App">
      <h1 class="name"> Welcome To My  Profile </h1>
     <ProfilePhoto />
     <FullName/>
     <Address />
     
    </div>
  );
}

export default App;
