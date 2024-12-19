import { Card, CardBody, CardHeader } from "react-bootstrap";
import NavBar from "../../components/navBar/navBar.js";
import styles from "./painel.module.css"

const Painel = () => {
    return (
        <div className={styles.containerPainel}>
            <div className={styles.bodyContainer}>
                <div className={styles.containerNavBarComponent}>
                    <NavBar />
                </div>
                <div className={styles.painelFlex}>
                    <div className={styles.maxWidth}>
                        <div className={styles.containerTitle}>
                            <div className={styles.flex}>
                                <h1 className={styles.titlePainel}>Ola Bruno, Seja bem vindo ao </h1>
                                <h1 className={styles.titlePainel2}> Polaris!</h1>
                            </div>
                            <p>v2.0.0</p>
                        </div>
                        <div className={styles.containerSubTitle}>
                            <h2 className={styles.subTittle}> Leia as ultimas noticias do mercado</h2>
                        </div>
                        <div className={styles.containerCard}>
                            <div className={styles.cardComponent} onClick={(() => { window.location.href = "https://neohubble.com/blog/5%20Dicas%20Essenciais%20para%20Iniciar%20seu%20Neg%C3%B3cio%20Online%20com%20o%20P%C3%A9%20Direito" })}>
                                <img className={styles.imgCard} src='https://cakeerp.com/wp-content/uploads/2019/07/2-3.png' />
                                <div className={styles.bodyCard}>
                                    <h1 className={styles.titleCard}>Tendências de mercado 2024: Como será o comportamento do consumidor</h1>
                                    <span className={styles.sobTitleCard}>Saiba como as tendências de consumo em 2024 afetarão micro e pequenos empreendedores. Conheça estratégias para se adaptar, vender mais e alavancar seu negócio. No cenário dinâmico dos negócios, compreender as tendências de mercado que influenciam o comportamento do consumidor em 2024 é mais do que uma vantagem competitiva - é uma necessidade para a sobrevivência dos pequenos negócios. ...</span>
                                </div>
                            </div>
                            <div className={styles.cardComponent} onClick={(() => { window.location.href = "https://neohubble.com/blog/Como%20a%20Intelig%C3%AAncia%20Artificial%20pode%20impulsionar%20seu%20empreendimento%20online" })}>
                                <img className={styles.imgCard} src='https://media.seudinheiro.com/cdn-cgi/image/fit=contain,width=715&,format=auto/uploads/2023/11/Firefly-uma-imagem-representando-uma-inteligencia-artificial-sem-controle-715x402.jpg' />
                                <div className={styles.bodyCard}>
                                    <h1 className={styles.titleCard}>Como a Inteligência Artificial pode impulsionar seu empreendimento online</h1>
                                    <span className={styles.sobTitleCard}>À medida que a tecnologia continua a evoluir, a IA está se tornando cada vez mais acessível e poderosa para empreendedores de todos os tamanhos. Ao aproveitar as capacidades da IA, os empreendedores podem construir sites mais eficientes, personalizados e lucrativos, proporcionando uma vantagem competitiva significativa em um mercado digital em constante mudança. Podendo estar atrasada a empresa que não estiver usando.  ...</span>
                                </div>
                            </div>
                            <div className={styles.cardComponent} onClick={(() => { window.location.href = "https://neohubble.com/blog/5%20Dicas%20Essenciais%20para%20Iniciar%20seu%20Neg%C3%B3cio%20Online%20com%20o%20P%C3%A9%20Direito" })}>
                                <img className={styles.imgCard} src='https://cakeerp.com/wp-content/uploads/2019/07/2-3.png' />
                                <div className={styles.bodyCard}>
                                    <h1 className={styles.titleCard}>Tendências de mercado 2024: Como será o comportamento do consumidor</h1>
                                    <span className={styles.sobTitleCard}>Saiba como as tendências de consumo em 2024 afetarão micro e pequenos empreendedores. Conheça estratégias para se adaptar, vender mais e alavancar seu negócio. No cenário dinâmico dos negócios, compreender as tendências de mercado que influenciam o comportamento do consumidor em 2024 é mais do que uma vantagem competitiva - é uma necessidade para a sobrevivência dos pequenos negócios. ...</span>
                                </div>
                            </div>
                            <div className={styles.cardComponent} onClick={(() => { window.location.href = "https://neohubble.com/blog/Como%20a%20Intelig%C3%AAncia%20Artificial%20pode%20impulsionar%20seu%20empreendimento%20online" })}>
                                <img className={styles.imgCard} src='https://media.seudinheiro.com/cdn-cgi/image/fit=contain,width=715&,format=auto/uploads/2023/11/Firefly-uma-imagem-representando-uma-inteligencia-artificial-sem-controle-715x402.jpg' />
                                <div className={styles.bodyCard}>
                                    <h1 className={styles.titleCard}>Como a Inteligência Artificial pode impulsionar seu empreendimento online</h1>
                                    <span className={styles.sobTitleCard}>À medida que a tecnologia continua a evoluir, a IA está se tornando cada vez mais acessível e poderosa para empreendedores de todos os tamanhos. Ao aproveitar as capacidades da IA, os empreendedores podem construir sites mais eficientes, personalizados e lucrativos, proporcionando uma vantagem competitiva significativa em um mercado digital em constante mudança. Podendo estar atrasada a empresa que não estiver usando.  ...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Painel;