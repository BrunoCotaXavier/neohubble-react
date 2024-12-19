import NavBar from "../../components/navBar/navBar.js";
import styles from "./dashboards.module.css"

const Dashboards = () => {
    return (
        <div>
            <div className={styles.containerNavBarComponent}>
                <NavBar />
            </div>
            <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', margin: 0, padding: 0, paddingTop: '50px' }}>
                <iframe
                    src="https://app.powerbi.com/view?r=eyJrIjoiOTE3NGIxZGQtNGQwNy00ZDExLTg1MmYtMzZmYTkzMTI5NzE5IiwidCI6IjZkNjBiNTVjLTI1NzYtNGQ2MC1hZTMzLTExZGYwZWEwNzk4MyJ9"
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    title="PowerBI Report"
                />
            </div>
        </div>
    );
}

export default Dashboards;