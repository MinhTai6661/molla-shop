import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import className from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import config from '~/config';
import { changeCurrentList, clearAll } from '~/page/Products/listProductsSlice';
import { allProductsSelector } from '~/redux/selector';
import { hideSidebar } from '~/redux/showSlice';
import Dropdown from '../Dropdown';
import style from './search.module.scss';

const { Search } = Input;

const cx = className.bind(style);
function SearchField({ className, normal }) {
    const navigate = useNavigate();
    const allProducts = useSelector(allProductsSelector);
    const dispatch = useDispatch();

    const [valueInput, setValueInput] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
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
        navigate(`/product-detail/${id}`);
        setValueInput('');
        dispatch(hideSidebar());
    };
    const handleSearch = () => {
        if (valueInput !== '') {
            dispatch(hideSidebar());
            navigate(`/products`);
            dispatch(clearAll());
            dispatch(changeCurrentList(valueInput));
            setShowDropdown(false);
        }
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
                    onKeyPress={(e) => {
                        e.key === 'Enter' && handleSearch();
                    }}
                />

                <span
                    // to={config.router.products}
                    className={cx('search-icon')}
                    onClick={handleSearch}
                >
                    <SearchOutlined />
                </span>
            </div>
        </Dropdown>
    );
}

SearchField.propTypes = {};

export default SearchField;
