import styles from './tabBottom.module.css'

const TabBottom = () => {
    return (
        <div>
            <div className={styles.containerTabBottom}>
                <div className={styles.containerLogo}>
                    <a href="https://www.instagram.com/neohubble/" target="_blank" rel="noopener noreferrer">
                        <img src='/assets/logoInstagram.png' alt="Instagram Logo" />
                    </a>
                </div>
                <div className={styles.containerLogo}>
                    <a href="https://www.tiktok.com/@neohubble?_t=8kcT0IxRfkb&_r=1" target="_blank" rel="noopener noreferrer">
                        <img src='/assets/tik.png' alt="TikTok Logo" />
                    </a>
                </div>
                <div className={styles.containerLogo}>
                    <a href="https://www.linkedin.com/company/neohubble/" target="_blank" rel="noopener noreferrer">
                        <img src='/assets/logoLinkedin.png' alt="LinkedIn Logo" />
                    </a>
                </div>
            </div>
            <div className={styles.containerText}>
                <span>
                    <a className={styles.linkPolice} target='_blank' href='https://docs.google.com/document/d/1KbAgHZvYMRYt1yqZJjlZCC59ryy2aIIl5FVEspjSAyA/edit?tab=t.0'>Política de Privacidade</a>
                    <a className={styles.linkPolice}> | © 2024 - Todos os direitos reservados Neohubble.</a>
                </span>
            </div>
        </div >
    );
}

export default TabBottom;