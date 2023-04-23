import React from 'react';
import propTypes from 'prop-types';
import css from './statistics.module.css';

function Statistics(props) {
  const { title, stats } = props;

  const itemData = stats.map(stat => (
    <li className={css.item} key={stat.id}>
      <span className={css.label}>{stat.label}</span>
      <span className={css.percentage}>{stat.percentage}</span>
    </li>
  ));

  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statlist}>{itemData}</ul>
    </section>
  );
}

Statistics.propTypes = {
  title: propTypes.string,
  label: propTypes.string,
  percentage: propTypes.number,
}

export default Statistics;
