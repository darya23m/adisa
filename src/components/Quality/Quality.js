import React from 'react';

import styles from './Quality.module.scss';
import siemens from './Siemens.jpg';

const Quality = () => {
  return (
    <div className={styles.quality}>
      <div className={styles.title}>
        <span>4</span>
        <h2>Высочайшее качество</h2>
      </div>
      <div className={styles.qualityArt}>
        <div className={styles.qualityText}>
          <p className={styles.qualityTextP1}>
            <span>Теплообменник</span> котла изготовлен из <span>качественной нержавеющей стали EN 1.4509</span><br />
            (AISI344), трубчатая конструкция снижает сопротивление и риск засорения. Нет<br />
            особых требований к качеству теплоносителя, в отличии от теплообменников,<br />
            изготовленных из алюминия или обычной котловой стали.
          </p>
          <p className={styles.qualityTextP2}>
            Отсутствует необходимость в поддержании температуры обратного теплоносителя<br />
            выше 60 градусов, как в классических жаротрубных котлах. (Экономия на<br /> 
            трехходовом клапане с сервоприводом и автоматикой или подмешивающем<br /> 
            насосе).
            <br />
            Чем ниже температура обратного теплоносителя, тем выше эффективность котла.
          </p>
          <p className={styles.qualityTextP3}>
            На котлах ADISA установлен воздушный фильтр в стандартной комплектации.<br />
            Газовый клапан и труба Вентури Honeywell (США). Плата управления и дисплей от<br />
            мирового производителя котловой автоматики — Siemens (Германия) модель LMS,<br />
            надежность которого проверена годами.
          </p>
        </div>
        <img src={siemens} alt='Siemens' width='408' height='269' className={styles.siemens} />
      </div>
    </div>
  );
};

export default Quality;