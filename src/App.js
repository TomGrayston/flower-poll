import "./App.css";
import React from "react";
import { Title } from "./components/Title/Title.tsx";
import { Button } from "./components/Button/Button.tsx";
import { getOptions } from "./utils/getOptions.ts";
import { Question } from "./containers/Question/Question.tsx";

function App() {
  let options;

  const badData = [];
  const badData2 = null;
  const badData3 = undefined;

  try {
    options = getOptions();
  } catch (error) {
    console.log("Error Message: ", error)
    // Report to external logging and error service
  }

  return (
    <div className="App">
      <Title>Flower Popularity Poll</Title>
      <Question
        text={"Select your very favourite flower from the list."}
        options={options}
      />
      <Question
        text={"Select your almost favourite flower from the list."}
        options={options}
      />
      <Question
        text={"Select your 3rd favourite flower from the list."}
        options={options}
      />
      <Question
        text={"Select your 4th favourite flower from the list."}
        options={options}
      />
      <Question
        text={"Example for Bad Data 1"}
        options={badData}
      />
      <Question
        text={"Example for Bad Data 2"}
        options={badData2}
      />
      <Question
        text={"Example for Bad Data 3"}
        options={badData3}
      />
      <br></br>
      <br></br>
      <Button>Send my Favourites</Button>
    </div>
  );
}

export default App;
