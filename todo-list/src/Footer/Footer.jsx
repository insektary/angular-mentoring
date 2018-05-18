import React from 'react';
import './footer.less';
import CONST from '../Constants';

const FilterButton = ({ id, clickHandler, content, chosenFilter }) => (
    <button id={ id } onClick={ clickHandler }
            className={ (chosenFilter === id) ? CONST.BUTTON_ACTIVE : CONST.BUTTON_CLASSNAME }>{ content }
    </button>
);

const Footer = ({ clearCompleted, length, handler, chosenFilter, someIsCompleted }) => (
    <div className={ length ? CONST.FOOTER_CLASSNAME : CONST.FOOTER_HIDDEN }>
        <div className={ CONST.COUNTER_CLASSNAME }>{ length } items left</div>
        <FilterButton id={ CONST.ALL_ID } clickHandler={ handler } content="All" chosenFilter={ chosenFilter }/>
        <FilterButton id={ CONST.ACTIVE_ID } clickHandler={ handler } content="Active" chosenFilter={ chosenFilter }/>
        <FilterButton id={ CONST.COMPLETED_ID } clickHandler={ handler } content="Completed" chosenFilter={ chosenFilter }/>
        { someIsCompleted && <button onClick={ clearCompleted } className={ CONST.BUTTON_CLASSNAME }>Clear completed</button> }
    </div>
);

export default Footer;