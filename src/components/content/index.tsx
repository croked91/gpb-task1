import { useUnit } from "effector-react";
import { $data, Gate } from "models/content";
import { Container } from "./conatainer";
import { DataCard } from "./data-card";
import s from "./styles.module.css";

export const Content = () => {
  const data = useUnit($data);

  return (
    <>
      <Gate />
      <div className={s.content}>
        {data &&
          data.map(({ title, list, text, id }) => (
            <Container>
              <DataCard title={title} list={list} text={text} id={id} />
            </Container>
          ))}
      </div>
    </>
  );
};
