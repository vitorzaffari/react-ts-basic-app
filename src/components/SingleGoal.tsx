import "./SingleGoal.css";

type SingleGoalProps = {
    id:number,
    title: string,
    description: string,
    handleDeleteGoal: (id:number) => void;
}


const SingleGoal = ({ id, title, description, handleDeleteGoal }: SingleGoalProps) => {


  return (
    <div className="single-goal">
      <div className="info-wrap">
        <p className="goal-title">{title}</p>
        <p className="goal-desc">{description}</p>
      </div>
      <button className="btn" onClick={() => handleDeleteGoal(id)}>Delete</button>
    </div>
  );
};

export default SingleGoal;
