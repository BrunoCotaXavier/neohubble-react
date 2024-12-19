import Form from '../../components/form/form';
import TabBottom from '../../components/tabBottom/tabBottom';
import styles from './home.module.css';


const Home = () => {
    return (
        <div className={styles.backgroundImage}>
            <div className={styles.containerHome}>
                <div className={styles.banner}>
                    <div className={styles.bannerBody}>
                        <div className={styles.containerTittle}>
                            <h1 className={styles.title}>
                                <span style={{
                                    background: 'linear-gradient(to right, white 0%, gray 50%, white 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>Soluções Digitais para</span>
                                <span style={{ color: '#5815DD' }}> Elevar </span>
                                <span style={{
                                    background: 'linear-gradient(to right, white 0%, gray 50%, white 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}> Seu Sucesso.</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" fill="#5814dd" viewBox="0 0 256 256">
                                    <path d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224ZM128,112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83ZM99.43,184h57.14c21.12-37.54,25.07-73.48,11.74-106.88C156.55,47.64,134.49,29,128,24c-6.51,5-28.57,23.64-40.33,53.12C74.36,110.52,78.31,146.46,99.43,184Zm-15,5.85Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM208,152.36l-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z"></path>
                                </svg>
                            </h1>

                        </div>
                        <div className={styles.containerSubtitle}>
                            <span className={styles.subTitle}>
                                Clique em "Iniciar" e realize um orçamento gratuito, descubra como podemos transformar e automatizar com tecnologia de ponta.
                            </span>
                        </div>
                        <div className={styles.containerButtons}>
                            <button className={styles.button}>Iniciar</button>
                            <button className={styles.buttonSecundary}>Saiba Mais</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.containerSectionInfo}>
                <div className={styles.containerTitle}>
                    <h1 className={styles.titleInfo} style={{
                        background: 'linear-gradient(to right, white 0%, gray 50%, white 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                    >Automação Inteligente com Bots de WhatsApp</h1>
                    <div className={styles.containerSpan}>
                        <span>Transforme sua comunicação com bots integrados ao WhatsApp, que automatizam o atendimento ao cliente de forma ágil e eficiente. Aumente sua produtividade e melhore a experiência do usuário com soluções que trabalham por você.</span>
                    </div>
                </div>
                <div className={styles.containerCard}>
                    <div className={styles.myCard}>
                        <h2 className={styles.titleCard}>Vamos criar do zero o seu agente inteligente personalizado.</h2>
                        <img className={styles.imagem} src="./assets/create-bot2.png" />
                    </div>
                    <div className={styles.myCard2}>
                        <h2 className={styles.titleCard}>Atendimento humanizado, alinhado à identidade e cultura da sua empresa.</h2>
                        <img className={styles.imagem} src="./assets/create-bot.png" />
                    </div>
                    <div className={styles.myCard3}>
                        <h2 className={styles.titleCard}>Atenda seus clientes 24 horas por dia com agentes inteligentes que nunca param!</h2>
                        <img className={styles.imagem} src="./assets/create-bot3.png" />
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.containerTitleInclused}>
                    <span className={styles.titleInclused} style={{
                        background: 'linear-gradient(to right, white 0%, gray 50%, white 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>O que vem </span>
                    <span className={styles.titleInclused} style={{ color: '#5815DD' }}>incluso </span>
                    <span className={styles.titleInclused} style={{
                        background: 'linear-gradient(to right, white 0%, gray 50%, white 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>por padrão.</span>
                </div>
                <div className={styles.containerInclused}>
                    <div className={styles.containerCardInclused}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" fill="#5814dd" viewBox="0 0 256 256">
                                <path d="M196.12,128c24.65-34.61,37.22-70.38,19.74-87.86S162.61,35.23,128,59.88C93.39,35.23,57.62,22.66,40.14,40.14S35.23,93.39,59.88,128c-24.65,34.61-37.22,70.38-19.74,87.86h0c5.63,5.63,13.15,8.14,21.91,8.14,18.48,0,42.48-11.17,66-27.88C151.47,212.83,175.47,224,194,224c8.76,0,16.29-2.52,21.91-8.14h0C233.34,198.38,220.77,162.61,196.12,128Zm8.43-76.55c7.64,7.64,2.48,32.4-18.52,63.28a300.33,300.33,0,0,0-21.19-23.57A300.33,300.33,0,0,0,141.27,70C172.15,49,196.91,43.8,204.55,51.45ZM176.29,128a289.14,289.14,0,0,1-22.76,25.53A289.14,289.14,0,0,1,128,176.29a289.14,289.14,0,0,1-25.53-22.76A289.14,289.14,0,0,1,79.71,128,298.62,298.62,0,0,1,128,79.71a289.14,289.14,0,0,1,25.53,22.76A289.14,289.14,0,0,1,176.29,128ZM51.45,51.45c2.2-2.21,5.83-3.35,10.62-3.35C73.89,48.1,92.76,55,114.72,70A304,304,0,0,0,91.16,91.16,300.33,300.33,0,0,0,70,114.73C49,83.85,43.81,59.09,51.45,51.45Zm0,153.1C43.81,196.91,49,172.15,70,141.27a300.33,300.33,0,0,0,21.19,23.57A304.18,304.18,0,0,0,114.73,186C83.85,207,59.09,212.2,51.45,204.55Zm153.1,0c-7.64,7.65-32.4,2.48-63.28-18.52a304.18,304.18,0,0,0,23.57-21.19A300.33,300.33,0,0,0,186,141.27C207,172.15,212.19,196.91,204.55,204.55ZM140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"></path>
                            </svg>
                        </div>
                        <div>
                            <h1 className={styles.subTitleInclused} >
                                SEO
                            </h1>
                        </div>
                        <div>
                            <span style={{ color: '#5815DD' }}>Site otimizado para buscas.
                            </span>
                        </div>
                    </div>
                    <div className={styles.containerCardInclused}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" fill="#5814dd" viewBox="0 0 256 256">
                                <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>
                            </svg>
                        </div>
                        <div>
                            <h1 className={styles.subTitleInclused} >
                                Site Seguro
                            </h1>
                        </div>
                        <div>
                            <span style={{ color: '#5815DD' }}>Certificado SSL incluso.
                            </span>
                        </div>
                    </div>
                    <div className={styles.containerCardInclused}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" fill="#5814dd" viewBox="0 0 256 256">
                                <path d="M224,72H208V64a24,24,0,0,0-24-24H40A24,24,0,0,0,16,64v96a24,24,0,0,0,24,24H152v8a24,24,0,0,0,24,24h48a24,24,0,0,0,24-24V96A24,24,0,0,0,224,72ZM40,168a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v8H176a24,24,0,0,0-24,24v72Zm192,24a8,8,0,0,1-8,8H176a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Zm-96,16a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h40A8,8,0,0,1,136,208Zm80-96a8,8,0,0,1-8,8H192a8,8,0,0,1,0-16h16A8,8,0,0,1,216,112Z"></path>
                            </svg>
                        </div>
                        <div>
                            <h1 className={styles.subTitleInclused} >
                                Responsivo
                            </h1>
                        </div>
                        <div>
                            <span style={{ color: '#5815DD' }}>Responsivo em Todos Aparelhos.
                            </span>
                        </div>
                    </div>
                    <div className={styles.containerCardInclused}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" fill="#5814dd" viewBox="0 0 256 256">
                                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a88,88,0,0,1,73.72,40H128a48.08,48.08,0,0,0-45.6,33l-23.08-40A87.89,87.89,0,0,1,128,40Zm32,88a32,32,0,1,1-32-32A32,32,0,0,1,160,128ZM40,128a87.44,87.44,0,0,1,9.56-39.86L86.43,152c.06.1.13.19.19.28A48,48,0,0,0,137.82,175l-23.1,40A88.14,88.14,0,0,1,40,128Zm92.69,87.87L169.57,152c.08-.14.14-.28.22-.42a47.88,47.88,0,0,0-6-55.58H210a88,88,0,0,1-77.29,119.87Z"></path>
                            </svg>
                        </div>
                        <div>
                            <h1 className={styles.subTitleInclused} >
                                Google Tools
                            </h1>
                        </div>
                        <div>
                            <span style={{ color: '#5815DD' }}>Integração ao Google Analytics.
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.containerInclused}>
                    <div className={styles.containerCardInclused}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" fill="#5814dd" viewBox="0 0 256 256">
                                <path d="M201.89,54.66A103.43,103.43,0,0,0,128.79,24H128A104,104,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88.12,88.12,0,0,1,190.54,65.93,87.39,87.39,0,0,1,215.65,120H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h24a24,24,0,0,1-24,24H136a8,8,0,0,0,0,16h56a40,40,0,0,0,40-40V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm128,56a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24v56Z"></path>
                            </svg>
                        </div>
                        <div>
                            <h1 className={styles.subTitleInclused}>
                                Suporte
                            </h1>
                        </div>
                        <div>
                            <span style={{ color: '#5815DD' }}>Gratis 1 mes de suporte.
                            </span>
                        </div>
                    </div>
                    <div className={styles.containerCardInclused}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" fill="#5814dd" viewBox="0 0 256 256">
                                <path d="M48,64a8,8,0,0,1,8-8H72V40a8,8,0,0,1,16,0V56h16a8,8,0,0,1,0,16H88V88a8,8,0,0,1-16,0V72H56A8,8,0,0,1,48,64ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16Zm56-48H224V128a8,8,0,0,0-16,0v16H192a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V160h16a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>
                            </svg>
                        </div>
                        <div>
                            <h1 className={styles.subTitleInclused} >
                                Personalização
                            </h1>
                        </div>
                        <div>
                            <span style={{ color: '#5815DD' }}>Personalização unica feita sob medida.
                            </span>
                        </div>
                    </div>
                    <div className={styles.containerCardInclused}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" fill="#5814dd" viewBox="0 0 256 256">
                                <path d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224ZM128,112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83ZM99.43,184h57.14c21.12-37.54,25.07-73.48,11.74-106.88C156.55,47.64,134.49,29,128,24c-6.51,5-28.57,23.64-40.33,53.12C74.36,110.52,78.31,146.46,99.43,184Zm-15,5.85Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM208,152.36l-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z"></path>
                            </svg>
                        </div>
                        <div>
                            <h1 className={styles.subTitleInclused} >
                                Tecnologia Avançada
                            </h1>
                        </div>
                        <div>
                            <span style={{ color: '#5815DD' }}>Utilizamos as melhores tecnologias.
                            </span>
                        </div>
                    </div>
                    <div className={styles.containerCardInclused}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" fill="#5814dd" viewBox="0 0 256 256">
                                <path d="M216,40H40A16,16,0,0,0,24,56V216a8,8,0,0,0,11.58,7.15L64,208.94l28.42,14.21a8,8,0,0,0,7.16,0L128,208.94l28.42,14.21a8,8,0,0,0,7.16,0L192,208.94l28.42,14.21A8,8,0,0,0,232,216V56A16,16,0,0,0,216,40Zm0,163.06-20.42-10.22a8,8,0,0,0-7.16,0L160,207.06l-28.42-14.22a8,8,0,0,0-7.16,0L96,207.06,67.58,192.84a8,8,0,0,0-7.16,0L40,203.06V56H216ZM136,112a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H144A8,8,0,0,1,136,112Zm0,32a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H144A8,8,0,0,1,136,144ZM64,168h48a8,8,0,0,0,8-8V96a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8v64A8,8,0,0,0,64,168Zm8-64h32v48H72Z"></path>
                            </svg>
                        </div>
                        <div>
                            <h1 className={styles.subTitleInclused} >
                                Portal de Notícia
                            </h1>
                        </div>
                        <div>
                            <span style={{ color: '#5815DD' }}>Todos os dias uma nova noticia/ dica.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Form />
            <TabBottom />
        </div>
    );
}

export default Home;