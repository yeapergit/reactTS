import { FC, PropsWithChildren } from "react";

type CourseGoalType = {
  id: number;
  title: string;
  onDelete: (id: number) => void
}

type CourseGoalProps = PropsWithChildren<CourseGoalType>

//const CourseGoal = ({ title, children }: CourseGoalProps) => {
const CourseGoal: FC<CourseGoalProps> = ({ title, id, children, onDelete }) => {
  return <article>
    <div>
      <h2>{title}</h2>
      {children}
    </div>
    <button onClick={() => onDelete(id)}>delete</button>
  </article>
}

export default CourseGoal;