import { useContext } from 'react';
import { ThemeContext } from '../../context/themecontext';
import './users.css';


export function Users() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={theme}>
            <h1>USERS</h1>
        </div>
    )
}