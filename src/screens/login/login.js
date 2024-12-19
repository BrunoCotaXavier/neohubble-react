import { Card } from 'react-bootstrap';
import styles from './login.module.css';
import { Link } from 'react-router-dom';

const auth = () => {
     window.location = '/painel'
}

const Login = () => {
    return (
        <div className={styles.backgroundImage}>
            <div className={styles.containerLogin}>
                <img width={100} height={100} src='https://neohubble.com/images/logo.png' />
                <Card className={styles.card}>
                    <form className={styles.formComponent}>
                        <div className={styles.sectionForm}>
                            <label>Email </label>
                            <input className={styles.inputForm} required name='email' type='email' id='email' />
                        </div>
                        <div className={styles.sectionForm}>
                            <label>Senha </label>
                            <input className={styles.inputForm} required type="password" name='password' id='password' />
                        </div>
                        <div className={styles.checkBoxSectionForm}>
                            <input className={styles.inputCheckBox} type="checkbox" id="save" />
                            <label>Lembre de mim</label>
                        </div>
                        <div className={styles.buttonSectionForm}>
                            <Link className={styles.linkForm} to={"/register"}>Esqueceu sua senha?</Link>
                            <button className={styles.buttonForm} onClick={auth}>ENTRAR</button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
}

export default Login;