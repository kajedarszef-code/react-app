import { useContext } from "react";
import { ThemeContext } from "../../context/themecontext";


export function Dashboard() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <h1>DASHBOARD</h1>
    </div>
  );
}
