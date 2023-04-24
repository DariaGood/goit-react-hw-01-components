import React from "react";
import propTypes from "prop-types";
import css from "./statistics.module.css";

function Statistics(props) {
  const { title, stats } = props;

  const itemData = stats.map((stat) => (
    <li className={css.item} key={stat.id}>
      <span className={css.label}>{stat.label}</span>
      <span className={css.percentage}>{stat.percentage}</span>
    </li>
  ));

  return (
    <section className={css.statistics}>
      { title  && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statlist}>{itemData}</ul>
    </section>
  );
}

Statistics.propTypes = {
  id: propTypes.string,
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
