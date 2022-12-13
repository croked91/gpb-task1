import { FC } from "react";
import { IDataCard } from "./interface";
import s from "./styles.module.css";
export const DataCard: FC<IDataCard> = ({ title, list, text, id }) => {
  return (
    <>
      <h2 className={s.title}>{title}</h2>
      {list && (
        <ul className={s.ul}>
          {list.map((item) => (
            <li key={id}>{item}</li>
          ))}
        </ul>
      )}
      <p>{text}</p>
    </>
  );
};
