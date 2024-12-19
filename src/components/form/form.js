import styles from './form.module.css';

const Form = () => {
    return (
        <div className={styles.containerForm}>
            <div className={styles.containerBannerForm}>
                <h1>
                    Entre em contato.
                </h1>
                <span className={styles.containerSpan}>
                    Fale com um de nossos especialistas e descubra como podemos transformar sua experiencia digital.
                </span>
            </div>
            <form className={styles.formComponent}>
                <input className={styles.inputForm} placeholder='Insira seu nome' type='text'></input>
                <input className={styles.inputForm} placeholder='Insira nome da empresa' type='text'></input>
                <input className={styles.inputForm} placeholder='Email' type='email'></input>
                <input className={styles.inputForm} placeholder='Descreva o motivo do contato' type='text'></input>
                <button className={styles.button}>Iniciar</button>
            </form>
        </div>
    )
}

export default Form;