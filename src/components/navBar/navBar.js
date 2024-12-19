import styles from "./navBar.module.css"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const NavBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarRef = useRef(null);

    const handleClick = () => {
        setCollapsed(!collapsed);
    }

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setCollapsed(true);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Sidebar ref={sidebarRef} collapsed={collapsed} className={styles.containerSidebar} backgroundColor="white">
            <Menu>
                <div className={styles.containerButtonColapse}>
                    {collapsed && (
                        <button className={styles.buttonColapse} onClick={handleClick}><img className={styles.arrow} src="/assets/arrow.png"></img></button>
                    )}
                    {!collapsed && (
                        <button className={styles.buttonColapse} onClick={handleClick}><img className={styles.arrow2} src="/assets/arrow.png"></img></button>
                    )}
                </div>
                <MenuItem><Link style={{ textDecoration: 'none', color: 'black' }} className={styles.noUnderline} to={"/painel"}>Polaris Hub</Link></MenuItem>
                <SubMenu label="Inteligencia e Dados">
                    <MenuItem> <Link style={{ textDecoration: 'none', color: 'black' }} className={styles.noUnderline} to={"/dashboards"}>Análise de Vendas </Link></MenuItem>
                </SubMenu>
                <MenuItem> Documentação </MenuItem>
                <MenuItem> Calendar </MenuItem>
                <span>Configuração</span>
                <hr></hr>
            </Menu>
        </Sidebar>
    );
}

export default NavBar; 