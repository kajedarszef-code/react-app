import { useContext } from "react"
import "./footer.css"
import { ThemeContext } from "../../context/themecontext"

export function Footer() {
    const {theme} = useContext(ThemeContext);
    return(
        <footer className={theme}>
            <div className="footer-item">
                <i class="fa-brands fa-instagram"></i>
            </div>
            <div className="footer-item">
                <i class="fa-brands fa-youtube"></i>
            </div>
            <div className="footer-item">
                <i class="fa-brands fa-linkedin"></i>
            </div>
        </footer>
    )
}