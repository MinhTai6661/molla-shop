import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import className from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import config from '~/config';
import { allProductsSelector } from '~/redux/selector';
import { hindSidebar } from '~/redux/showSlice';
import Dropdown from '../Dropdown';
import style from './search.module.scss';

const { Search } = Input;

const cx = className.bind(style);
function SearchField({ className, normal }) {
    const navigate = useNavigate();
    const allProducts = useSelector(allProductsSelector);
    const dispatch = useDispatch();
    const [showDropdown, setShowDropdown] = useState(false);
    const [valueInput, setValueInput] = useState('');
    const [result, setResult] = useState([]);

    useEffect(() => {
        const value = valueInput.trim().toLowerCase();
        if (value !== '') {
            const filteredProducts = allProducts.filter((product) =>
                product.title.trim().toLowerCase().includes(value),
            );
            setResult(filteredProducts);
            return;
        }
        setResult([]);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valueInput]);

    const handleChangeInput = (e) => {
        setShowDropdown(true);

        const value = e.target.value;
        if (value.trim() === '' && value !== '') return;
        if (value.endsWith('  ')) return;
        setValueInput(value);
    };
    const handleHideResult = () => {
        setShowDropdown(false);
    };
    const handleReload = () => {
        setValueInput('');
    };

    const handleClickItem = (id) => {
        navigate(`/product/${id}`);
        setValueInput('');
        dispatch(hindSidebar());
    };

    return (
        <Dropdown
            visible={showDropdown}
            data={result}
            onClickOutside={handleHideResult}
            onReload={handleReload}
            onClickItem={handleClickItem}
        >
            <div className={cx('search', { normal })}>
                <input
                    className={cx('search-input')}
                    placeholder="Search product..."
                    onChange={handleChangeInput}
                    value={valueInput}
                />

                <Link to={config.router.products} className={cx('search-icon')}>
                    <SearchOutlined />
                </Link>
            </div>
        </Dropdown>
    );
}

SearchField.propTypes = {};

export default SearchField;
