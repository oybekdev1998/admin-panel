import React, {FC} from 'react';
import styles from './Home.module.css';
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Charts from '../../components/Charts/Charts';
import WidgetSm from "../../components/widgetSmall/WidgetSm";
import WidgetLg from "../../components/widgetLarge/WidgetLg";

const Home: FC = () => {
  return (
    <div className={styles.home}>
      <FeaturedInfo />
      <Charts />
      <div className={styles.widgets}>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home;