import classNames from 'classnames/bind';
import styles from './Container.module.scss';
const cx = classNames.bind(styles);
function Container({ children, size }) {
    return <div className={cx('container', { [size]: !!size })}>{children}</div>;
}

export default Container;
