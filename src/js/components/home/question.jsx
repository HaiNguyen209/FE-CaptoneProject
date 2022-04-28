import React from 'react';
import { Link } from 'react-router-dom';
import { QuestionCircleOutlined } from '@ant-design/icons';
import styles from '../../../scss/question.module.scss';
import logo from '../../../assets/img/logo.png';

export default function question() {
  // const logo = require('../../../assets/img/logo.png');
  return (
    <div className={styles.container}>
      <div className={styles['container-inner']}>
        <div className={styles['container-inner_img']}>
          <img className={styles['container-inner_img']} src={logo} alt="logo" />
        </div>
        <div className={styles['container-inner_content']}>
          <div className={styles['container-inner_content__title']}>
            <div className={styles['container-inner_content__title--text']}>
              <Link className="link" href="#"> Câu hỏi 1 </Link>

            </div>
            <div className={styles['container-inner_content__title--tag']}>
              <span className={styles['container-inner_content__title--tag--red']}><QuestionCircleOutlined />Question</span>
              <span className={styles['container-inner_content__title--tag--black']}>Report</span>
            </div>
          </div>

          <div className={styles['container-inner_content__description']}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              nobis quae tempore sunt neque tempora
              accusamus repellendus qui atque dolor nemo consequatur quaerat quibusdam
              aliquam vero iure veniam, quisquam odio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              nobis quae tempore sunt neque tempora
              accusamus repellendus qui atque dolor nemo.
            </p>
          </div>

          <hr />

        </div>
      </div>
    </div>
  );
}
