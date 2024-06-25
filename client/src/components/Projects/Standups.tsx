import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReturnButton from "../Components/return";
import "./Standups.css";
import Button from "react-bootstrap/esm/Button";

const Standups: React.FC = () => {
  const navigate = useNavigate();
  const handleStandups = () => {
    navigate("/standups");
  };

  const [doneText, setDoneText] = useState("");
  const [plansText, setPlansText] = useState("");
  const [challengesText, setChallengesText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setState: React.Dispatch<React.SetStateAction<string>>) => {
    setState(e.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      const value = target.value;
      const newValue = value + "\n";
      target.value = newValue;
    }
  };

  return (
    <div onClick={handleStandups}>
      <ReturnButton />
      <div className="DashboardContainerStandups">
        <h1>Standup Emails</h1>
      </div>
      <div className="BigContainerStandups">
        <div className="InputContainer">
          <div className="Done">
            <div className="DoneTitle">Done</div>
            <textarea
              className="DoneContainer"
              value={doneText}
              onChange={(e) => handleInputChange(e, setDoneText)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="Plans">
            <div className="PlansTitle">Plans</div>
            <textarea
              className="PlansContainer"
              value={plansText}
              onChange={(e) => handleInputChange(e, setPlansText)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="Challenges">
            <div className="ChallengesTitle">Challenges</div>
            <textarea
              className="ChallengesContainer"
              value={challengesText}
              onChange={(e) => handleInputChange(e, setChallengesText)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
        <Button className="SendButton" type="submit">
          Send Email
        </Button>
      </div>
    </div>
  );
};

export default Standups;
