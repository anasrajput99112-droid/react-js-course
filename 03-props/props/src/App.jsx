import React from "react";
import Card from "./components/card.jsx";

const App = () => {
  return (
    <div className="parent">
      <Card
        title="Camre"
        user="sara"
        age={30}
        img="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ_Zuz3haRHrSz0f3bnMlUTGa14Qc7Z5LLQ3-l04P98hv9CMXQU"
      />
      <Card
        title="Asronate"
        user="astonate"
        age={25}
      />
      <Card
        title="Tree"
        user="greeney"
        age={35}
        img="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
      />
    </div>
  );
};

export default App;
