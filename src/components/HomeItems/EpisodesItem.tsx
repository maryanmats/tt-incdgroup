import styles from "./styles.module.scss";
import { Episode } from "../../store/types/homeTypes";
import { useNavigate } from "react-router-dom";

export default function EpisodesItem({ data }: { data: Episode }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    localStorage.setItem(
      "@testHistory",
      localStorage.getItem("@testHistory")
        ? `${localStorage.getItem("@testHistory")}|Visit Page=${data.name}`
        : `Visit Page=${data.name}`,
    );
    navigate(`/episode-detail/${data.id}`);
  };
  return (
    <div onClick={handleNavigate} className={styles.location}>
      <div className={styles.location__body}>
        <h3>{data.name}</h3>
        <div className={styles.location__body_flex}>
          <span>{data.episode}</span>
        </div>
        <div className={styles.location__body_item}>
          <h5>Episode:</h5>
          <p>{data.episode}</p>
        </div>
        <div className={styles.location__body_item}>
          <h5>Characters:</h5>
          <p>{data.characters.join(",")}</p>
        </div>
      </div>
    </div>
  );
}
