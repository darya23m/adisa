import React from 'react';

 import styles from './Footer.module.scss';
 import { ReactComponent as Eclipse } from './img/eclipse.svg';

 const Footer = ({ data }) => {

   return (
     <div className={styles.container}>
       <Eclipse className={styles.eclipse} />
       <div className={styles.content}>
         <h2 className={styles.header}>{data.title}</h2>
         <div className={styles.text}>
           <div className={styles.textFirst}>
            <p className={styles.paragraph}>ADISA Group была основана в 1961 Пьером Марти, ее действующим президентом.</p>
            <p className={styles.paragraph}>- ADISA Calefaccion (отопительное оборудование): производство высокоэффективных решений для отопления и производства горячей воды, средней и большой мощности, таких как котлы и модульные котельные;</p>
            <p className={styles.paragraph}>- ADISA Antilegionella гарантирует постоянное устранение бактерий в системе ГВС.</p>
           </div>
           <p className={styles.textSecond}>Добившись признания на европейском и американском рынках, компания заинтересовалась рынком стран Восточной Европы. В год своего 50-тилетнего юбилея ADISA Group вышла на рынок Украины. Развитие компании основано на политике постоянных инвестиций в исследования, на деловых взаимоотношениях с партнерами, а также на клиенте и его потребностях. В настоящее время формируется дилерская сеть и проводятся обучения проектировщиков.</p>
         </div>
         <div className={styles.divider} />
         <div className={styles.madeBy}>
           Made by
           {' '}
           <a href="https://logge.company" className={styles.linkLogge}>
             Logge.company
           </a>
         </div>
       </div>
     </div>
   );
 };

 export default Footer;
