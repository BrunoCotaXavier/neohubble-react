import React from 'react';
import styles from './notFound.module.css'

function NotFound() {
    return (
        <div className={styles.containerNotFound}>
            <div>
                <h1>Ops, esta página não existe!</h1>
                <p>Confira se está navegando corretamente!</p>
            </div>
        </div>
    );
}

export default NotFound;
