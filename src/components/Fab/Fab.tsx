import { useContext, useState } from "react";
import { ReactComponent as VerticalSvg } from "./../../assets/icons/verticalIcon.svg";
import { ReactComponent as DownloadSvg } from "./../../assets/icons/downloadIcon.svg";
import { ReactComponent as HistorySvg } from "./../../assets/icons/historyIcon.svg";
import styles from "./styles.module.scss";
import { DrawerContext } from "../../context/DrawerContext";
import { Character, Episode, Location } from "../../store/types/homeTypes";
import clsx from "clsx";

export default function Fab({ isMain, data }: { isMain: boolean; data?: Character[] | Location[] | Episode[] }) {
  const [opened, setOpened] = useState(false);
  const drawerContext = useContext(DrawerContext);

  function convertToCSV(data: any) {
    const header = Object.keys(data[0]);
    const csv = [header.join(",")];

    for (const row of data) {
      const values = header.map((key) => JSON.stringify(row[key]));
      csv.push(values.join(","));
    }

    return csv.join("\n");
  }

  function downloadCSV(csv: any) {
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "rickandmorty.csv";
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
  }

  const handleDownload = () => {
    if (isMain) {
      const csvData = convertToCSV(data);
      downloadCSV(csvData);
    }
  };

  return (
    <div className={styles.main}>
      {opened && (
        <div className={styles.subMenu}>
          <div onClick={() => drawerContext?.setIsOpenDrawer(true)} className={styles.history}>
            <HistorySvg />
          </div>
          <div onClick={handleDownload} className={clsx(styles.download, { [styles.downloadDisabled]: !isMain })}>
            <DownloadSvg />
          </div>
        </div>
      )}
      <div onClick={() => setOpened((current) => !current)} className={styles.wrapper}>
        {opened ? <span>X</span> : <VerticalSvg />}
      </div>
    </div>
  );
}
