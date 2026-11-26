import { NavLink } from "react-router";
import styles from './navbar.module.css';
import Office from "~/components/lottie/office";
type NavlinkProps = {
  isActive: boolean;
};

const NavBar = ()=>{
    const linkStyle = ({ isActive }: NavlinkProps) => {
    console.log(isActive);
    return isActive ? "customLink" : "";
  };
    return(
        <div className={styles.navbar}>
        <ul className={styles.listStyle}>
            <li className={styles.customLink}>
              <NavLink to="/" style={({ isActive }) => ({
              color: isActive ? "orange" : "#333",
              fontWeight: isActive ? "bold" : "normal",
              borderBottom: isActive ? "4px solid #333": "0"
              })}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/create" style={({ isActive }) => ({
              color: isActive ? "orange" : "#333",
              fontWeight: isActive ? "bold" : "normal",
              borderBottom: isActive ? "4px solid #333": "0"
              })}>
                Create CV
              </NavLink>
              </li>
              <li>
              <NavLink to="/templates" style={({ isActive }) => ({
              color: isActive ? "orange" : "#333",
              fontWeight: isActive ? "bold" : "normal",
              borderBottom: isActive ? "4px solid #333": "0"
              })}>
                CV Templates
              </NavLink>
              </li>
              
               <li>
               <NavLink to="/faq" style={({ isActive }) => ({
              color: isActive ? "orange" : "#333",
              fontWeight: isActive ? "bold" : "normal",
              borderBottom: isActive ? "4px solid #333": "0"
              })}>
                FAQ
              </NavLink>
              </li>
                <li>
               <NavLink to="/feedback" style={({ isActive }) => ({
              color: isActive ? "orange" : "#333",
              fontWeight: isActive ? "bold" : "normal",
              borderBottom: isActive ? "4px solid #333": "0"
              })}>
                Feedback
              </NavLink>
              </li>
                <li>
               <NavLink to="/contact" style={({ isActive }) => ({
              color: isActive ? "orange" : "#333",
              fontWeight: isActive ? "bold" : "normal",
              borderBottom: isActive ? "4px solid #333": "0"
              })}>
                Contact
              </NavLink>
              </li>
        </ul>
        </div>
    )
}
export default NavBar;