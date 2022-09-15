import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    primary = false,
    fill,
    secondary,
    outline = false,
    small = false,
    large = false,
    text = false,
    rouded = false,
    full = false,
    disabled = false,
    rightIcon,
    leftIcon,
    to,
    href,
    children,
    className,
    onClick,

    ...restProps
}) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        fill,
        rouded,
        secondary,
        full,
        [className]: className,
    });
    const props = {
        onClick,
        ...restProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (typeof props[key] === 'function' && key.startsWith('on')) {
                delete props[key];
            }
        });
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('left-icon')}> {leftIcon}</span>}
            <span> {children}</span>
            {rightIcon && <span className={cx('right-icon')}> {rightIcon}</span>}
        </Comp>
    );
}
Button.propTypes = {
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.bool,
    rouded: PropTypes.bool,
    disabled: PropTypes.bool,
    rightIcon: PropTypes.node,
    leftIcon: PropTypes.node,
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Button;
