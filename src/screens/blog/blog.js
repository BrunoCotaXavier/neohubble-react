import styles from './blog.module.css';

import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className={styles.backgroundImage}>
            <div className={styles.containerSearch}>
                <div className={styles.containerInput}>
                    <InputGroup className='flex'>
                        <Form.Control
                            placeholder="Digite o que procura?"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                            Pesquisar
                        </Button>
                    </InputGroup>
                </div>
            </div>
            <div className={styles.containerBlog}>
                <Card className={styles.card}>
                    <div className={styles.cardHead}>
                        <div>
                            <Link to={'/'}>
                                <img width={45} height={45} src='https://neohubble.com/images/logo.png' />
                            </Link>
                            <label className={styles.textTittle}>@Neohbble</label>
                            <label className={styles.subText}>- 2 de setembro 2024</label>
                        </div>
                        <div>
                            <DropdownButton
                                size={'sm'}
                                variant={"Primary"}
                                title={'Editar'}
                                className={styles.dropDown}
                            >
                                <Dropdown.Item eventKey="1" >
                                    Editar Publicação
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="2" >
                                    Excluir Publicação
                                </Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div>
                    <div className={styles.cardBody}>
                        <span>
                            Neste post, apresento um widget desenvolvido em JavaScript que não só tornará seu site mais acessível, mas também ajudará a validar se ele está seguindo alguns princípios de acessibilidade, como o HTML semântico.
                        </span>
                    </div>
                </Card>
                <Card className={styles.card}>
                    <div className={styles.cardHead}>
                        <div>
                            <Link to={'/'}>
                                <img width={45} height={45} src='https://neohubble.com/images/logo.png' />
                            </Link>
                            <label className={styles.textTittle}>@Neohbble</label>
                            <label className={styles.subText}>- 2 de setembro 2024</label>
                        </div>
                        <div>
                            <DropdownButton
                                size={'sm'}
                                variant={"Primary"}
                                title={'Editar'}
                                className={styles.dropDown}
                            >
                                <Dropdown.Item eventKey="1" >
                                    Editar Publicação
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="2" >
                                    Excluir Publicação
                                </Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div>
                    <div className={styles.cardBody}>
                        <span>
                            Ei, você! Já se pegou sonhando com a liberdade financeira, imaginando como seria ganhar dinheiro na internet e finalmente ter uma renda extra? Bem, acredite, você não está sozinho!
                        </span>
                    </div>
                </Card>
                <Card className={styles.card}>
                    <div className={styles.cardHead}>
                        <div>
                            <Link to={'/'}>
                                <img width={45} height={45} src='https://neohubble.com/images/logo.png' />
                            </Link>
                            <label className={styles.textTittle}>@Neohbble</label>
                            <label className={styles.subText}>- 2 de setembro 2024</label>
                        </div>
                        <div>
                            <DropdownButton
                                size={'sm'}
                                variant={"Primary"}
                                title={'Editar'}
                                className={styles.dropDown}
                            >
                                <Dropdown.Item eventKey="1" >
                                    Editar Publicação
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="2" >
                                    Excluir Publicação
                                </Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div>
                    <div className={styles.cardBody}>
                        <span>
                            Pessoal, estas 10 dicas que trago hoje valem muito a pena ser aplicadas. Tenho conhecidos que atualmente, assim como eu, vivem de renda digital, e essas são dicas essenciais que selecionamos. Lembrando que a maior dica de todas é colocar em prática todo o nosso conteúdo, até porque o dinheiro não cai do céu.
                        </span>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Blog;