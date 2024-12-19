import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {

    return (
        <div className={styles.headerContainer}>
            <nav className={styles.containerLinks}>
                <Link to={'/'}>
                    <img width={45} height={45} src='https://neohubble.com/images/logo.png' />
                </Link>
                <div className={styles.containerSpace}>
                    <Link className={styles.noUnderline} to={"/"}>Home</Link>
                    <DropdownButton
                        size={'sm'}
                        variant={"Primary"}
                        title={'Serviços'}
                        className={styles.dropDown}
                    >
                        <Dropdown.Item eventKey="1" >
                            <Link className={styles.noUnderline} to={"/servicos"}>Agentes Inteligentes de Atendimento (WhatsApp-Bot).</Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="2" >
                            <Link className={styles.noUnderline} to={"/servicos"}>Analise de Dados e Gestão. (Graficos Personalizados Ao Vivo).</Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="3" >
                            <Link className={styles.noUnderline} to={"/servicos"}>Automação de Processos (Negócios, Logistica).</Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4" >
                            <Link className={styles.noUnderline} to={"/servicos"}>Orçamento de Serviços (Software, Website).</Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4" >
                            <Link className={styles.noUnderline} to={"/servicos"}>Suporte premium Neohubble.</Link>
                        </Dropdown.Item>
                    </DropdownButton>
                    <Link className={styles.noUnderline} to={"/orcamento"}>Orçamento</Link>
                    <Link className={styles.noUnderline} to={"/blog"}>Blog</Link>
                    <DropdownButton
                        size={'sm'}
                        variant={"Primary"}
                        title={'Redes'}
                        className={styles.dropDown}
                    >
                        <Dropdown.Item eventKey="1" target='_blank' href="https://www.instagram.com/neohubble/">
                            @Instagram
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="2" target='_blank' href="https://www.linkedin.com/company/neohubble/">
                            @Linkedin
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="3" target='_blank' href="#/action-1">
                            @WhatsApp
                        </Dropdown.Item>
                    </DropdownButton>
                </div>
            </nav>
            <div className={styles.containerProfile}>
                <p className={styles.textProfile}>
                    <Link className={styles.noUnderline} to={"/register"}>Registre-se</Link>
                </p>
                <p>/</p>
                <p className={styles.subTextProfile}>
                    <Link className={styles.subTextProfile} to={"/login"}>Entrar</Link>
                </p>
            </div>
        </div>
    );
}

export default Header;