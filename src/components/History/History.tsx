import { Drawer } from "@mui/material";
import { useContext } from "react";
import { DrawerContext } from "../../context/DrawerContext";
import styles from "./styles.module.scss";

export default function History({ isOpen }: { isOpen: boolean }) {
  const drawerContext = useContext(DrawerContext);

  const history = localStorage.getItem("@testHistory");

  return (
    <Drawer anchor={"right"} open={isOpen} onClose={() => drawerContext?.setIsOpenDrawer(false)}>
      <div className={styles.wrapper}>
        <h4 className={styles.title}>History:</h4>
        <ul>
          {history?.split("|")?.map((item, index) => {
            return (
              <li key={index}>
                {item.split("&")?.map((item, index) => {
                  if (item.split("=")?.[1]?.length > 0) {
                    return (
                      <div key={index}>
                        {item.split("=")?.[0] === "filterBy" ? "Type of Characters: " : `${item.split("=")?.[0]}: `}{" "}
                        {item.split("=")?.[1]}
                      </div>
                    );
                  }
                })}
              </li>
            );
          })}
        </ul>
      </div>
    </Drawer>
  );
}
