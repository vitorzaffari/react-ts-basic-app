import { useState } from "react"
import GoalsContainer from "./components/GoalsContainer"
import Header from "./components/Header"
import GoalForm from "./components/GoalForm"

 export type goal = {
  title: string,
  description: string,
  id: number
}

const App = () => {

  const [goals, setGoals] = useState<goal[]>([]);

  function handleAddGoal(item:goal){
    const newGoal: goal = item
    setGoals(prev => ([
      ...prev, newGoal
    ]))


  }

  function handleDeleteGoal(id: number){
    const updatedGoals = goals.filter(item => item.id != id);
    setGoals(() => updatedGoals);
  }

  return (
    <main>
      <Header />
      <GoalForm handleAddGoal={handleAddGoal}/>
      <GoalsContainer goals={goals} handleDeleteGoal={handleDeleteGoal}/>
    </main>
  )
}

export default App