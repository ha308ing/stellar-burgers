import { useLocation } from "react-router-dom";
import { AppHeader } from "../../app-header/app-header";
import styles from "./layout-main.module.scss";
import { useSelector } from "react-redux";
import { selectApp } from "../../../services/app";
import { useMemo } from "react";

export const LayoutMain = ({ children }) => {
  const location = useLocation();
  const { isMobile } = useSelector(selectApp);

  const key = useMemo(() => {
    return isMobile ? location.pathname : null;
  }, [isMobile, location]);

  return (
    <section className={styles.container}>
      <AppHeader key={key} />
      {children}
    </section>
  );
};
