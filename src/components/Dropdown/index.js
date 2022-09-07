import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Dropdown.module.scss';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Dropdown({
    children,
    visible = false,
    offset,
    data = [],
    isShow = true,
    onClickOutside,
    maxElement = 10,
    onClickItem,
}) {
    const navigate = useNavigate();

    const ref = useRef(null);
    useEffect(() => {
        // Alert if clicked on outside of element

        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside();
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    return (
        <>
            {/* {visible && <div className={cx('overlay')} onClick={onClickOutside}></div>} */}
            <div className={cx('wrapper', { visible })} ref={ref}>
                {children}
                {visible && (
                    <ul
                        className={cx('list')}
                        style={{
                            top: offset && `calc(100% + ${offset[1] || offset[0]}px)`,
                            left: offset && `calc(${offset[0]}px)`,
                        }}
                    >
                        {data &&
                            data.length > 0 &&
                            isShow &&
                            data.map(
                                (product, index) =>
                                    index < maxElement && (
                                        <li
                                            key={product.id}
                                            className={cx('item')}
                                            onClick={() => onClickItem(product.id)}
                                        >
                                            {product.title}
                                        </li>
                                    ),
                            )}
                    </ul>
                )}
            </div>
        </>
    );
}

Dropdown.propTypes = {
    children: PropTypes.node.isRequired,
    visible: PropTypes.bool,
    offset: PropTypes.array,
    data: PropTypes.array,
    onClickOutside: PropTypes.func,
    onClickItem: PropTypes.func,
    maxElement: PropTypes.number,
};

export default Dropdown;
