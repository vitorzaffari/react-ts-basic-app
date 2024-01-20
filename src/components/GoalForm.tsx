import { useRef } from "react";
import { goal } from "../App";
import "./GoalForm.css";

type GoalFormProps = {
  handleAddGoal: (item: goal) => void;
};

const GoalForm = ({ handleAddGoal }: GoalFormProps) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const title = nameRef.current!.value;
    const description = descRef.current!.value;

    if(title.trim()==''){
        return;
    }

    const newGoal = {
      title,
      description,
      id: Math.random(),
    };
    handleAddGoal(newGoal);
    e.currentTarget.reset();
  }

  function createNewGoal() {}

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrap">
        <label htmlFor="title">Your New Goal</label>
        <input ref={nameRef} type="text" id="title" name="title" />
      </div>

      <div className="input-wrap">
        <label htmlFor="description">Short Description</label>
        <input ref={descRef} type="text" id="description" name="description" />
      </div>

      <button className="btn form-btn" onClick={createNewGoal}>
        Add Goal
      </button>
    </form>
  );
};

export default GoalForm;
