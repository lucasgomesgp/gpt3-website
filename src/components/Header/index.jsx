import { useRef, useState } from "react";
import logo from "../../assets/GPT-3.svg";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import styles from "./styles.module.scss";

const MenuItems = () => (
    <>
        <li><a href="#home">Home</a></li>
        <li><a href="#whatisgpt3">What is GPT?</a></li>
        <li><a href="#open">Open AI</a></li>
        <li><a href="cases">Case Studies</a></li>
        <li><a href="#library">Library</a></li>
    </>
);
export function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const menuRef = useRef();
    function changeMenu() {
        if (toggleMenu) {
            menuRef.current.style.display = "none";
            setToggleMenu(false);
        } else {
            menuRef.current.style.display = "initial";
            setToggleMenu(true);
        }
    }
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.items}>
                    <ul>
                        <li>
                            <img src={logo} alt="Logo GPT-3" />
                        </li>
                        <MenuItems />
                    </ul>
                </nav>
                <div className={styles.buttons}>
                    <a href="#signin">Sign in</a>
                    <button>Sign up</button>
                </div>
                <div className={styles.toggleMenu}>
                    {
                        toggleMenu ?
                            <IoMdClose size={25} color="#ffffff" onClick={changeMenu} />
                            :
                            <FiMenu size={25} color="#ffffff" onClick={changeMenu} />
                    }
                </div>
            </header>
            <div className={styles.menuToggled} ref={menuRef}>
                <ul>
                    <MenuItems />
                    <li>
                        <a href="#signin">Sign In</a>
                    </li>
                    <li><a href="#signout">Sign Out</a></li>
                </ul>
            </div>
        </>
    );
}