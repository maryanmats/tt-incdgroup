import styles from "./styles.module.scss";
import { Location } from "../../store/types/homeTypes";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

export default function LocationItem({ data }: { data: Location }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    localStorage.setItem(
      "@testHistory",
      localStorage.getItem("@testHistory")
        ? `${localStorage.getItem("@testHistory")}|Visit Page=${data.name}`
        : `Visit Page=${data.name}`,
    );
    navigate(`/location-detail/${data.id}`);
  };
  return (
    <div onClick={handleNavigate} className={styles.location}>
      <div className={styles.location__body}>
        <h3>{data.name}</h3>
        <div className={styles.location__body_flex}>
          <span>{data.dimension}</span>
        </div>
        <div className={styles.location__body_item}>
          <h5>Resident:</h5>
          <p>{data.residents}</p>
        </div>
        <div className={styles.location__body_item}>
          <h5>Type:</h5>
          <p>{data.type}</p>
        </div>
      </div>
    </div>
  );
}
