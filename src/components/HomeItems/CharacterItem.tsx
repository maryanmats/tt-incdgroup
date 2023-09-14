import styles from "./styles.module.scss";
import { Character } from "../../store/types/homeTypes";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

export default function CharacterItem({ data }: { data: Character }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    localStorage.setItem(
      "@testHistory",
      localStorage.getItem("@testHistory")
        ? `${localStorage.getItem("@testHistory")}|Visit Page=${data.name}`
        : `Visit Page=${data.name}`,
    );
    navigate(`/character-detail/${data.id}`);
  };

  return (
    <div onClick={handleNavigate} className={styles.character}>
      <div className={styles.character__image}>
        <img src={data.image} alt="image of character" />
      </div>
      <div className={styles.character__body}>
        <h3>{data.name}</h3>
        <div className={styles.character__body_flex}>
          <div
            className={clsx(styles.character__status, {
              [styles.character__status_green]: data.status === "Alive",
              [styles.character__status_red]: data.status === "Dead",
            })}
          />
          <span>
            {data.status} - {data.species}
          </span>
        </div>
        <div className={styles.character__body_item}>
          <h5>Last known location:</h5>
          <p>{data.location.name}</p>
        </div>
        <div className={styles.character__body_item}>
          <h5>First seen in:</h5>
          <p>{data.origin.name}</p>
        </div>
      </div>
    </div>
  );
}
