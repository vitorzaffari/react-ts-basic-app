import { type goal } from "../App";
import "./GoalsContainer.css";
import SingleGoal from "./SingleGoal";

type GoalsContainerProps = {
  goals: goal[];
  handleDeleteGoal: (id:number) => void; 
};

const GoalsContainer = ({ goals, handleDeleteGoal }: GoalsContainerProps) => {
  return (
    <div className="goals-container">
      {goals.map((item) => (
        <SingleGoal key={item.id} {...item} handleDeleteGoal={handleDeleteGoal}/>
      ))}
    </div>
  );
};

export default GoalsContainer;
