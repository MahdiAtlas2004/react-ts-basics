// import { type PropsWithChildren, type ReactNode } from "react";
import { type FC, type ReactNode } from "react";

interface CourseGoalProps {
  title: string;
  children: ReactNode;
}

// type CourseGoalProps = PropsWithChildren<{title: string}>;

const CourseGoal: FC<CourseGoalProps> = ({title, children}: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}
export default CourseGoal


// export default function CourseGoal({ title, children }: CourseGoalProps) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// }
