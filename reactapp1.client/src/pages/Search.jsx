import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FilterSidebar from '../componentsJSX/FilterSidebar';
import SearchResults from '../componentsJSX/SearchResults';
import './Search.scss';
import backgroundImage from '../assets/images/contact/sectionBG.jpg';

const Search = () => {
    const [filters, setFilters] = useState({});
    const [sortOrder, setSortOrder] = useState('Lookday 推薦');
    const [results, setResults] = useState([]);
    const location = useLocation();

    const query = new URLSearchParams(location.search).get('query');

    const sortResults = (results, order) => {
        switch (order) {
            case '價格低到高':
                return results.sort((a, b) => a.price - b.price);
            case '價格高到低':
                return results.sort((a, b) => b.price - a.price);
            case '評分最高':
                return results.sort((a, b) => b.rating - a.rating);
            default:
                return results;
        }
    };

    useEffect(() => {
        // 使用假數據
        const data = [
            { id: 1, image: 'https://via.placeholder.com/300', title: '景點 1', description: '描述 1', price: 100, rating: '4.5', location: '臺北' },
            { id: 2, image: 'https://via.placeholder.com/300', title: '景點 2', description: '描述 2', price: 200, rating: '4.0', location: '臺中' },
            { id: 3, image: 'https://via.placeholder.com/300', title: '景點 3', description: '描述 3', price: 300, rating: '4.8', location: '高雄' },
            { id: 4, image: 'https://via.placeholder.com/300', title: '景點 4', description: '描述 4', price: 400, rating: '4.2', location: '臺南' },
            { id: 5, image: 'https://via.placeholder.com/300', title: '景點 5', description: '描述 5', price: 500, rating: '4.7', location: '宜蘭' },
            { id: 6, image: 'https://via.placeholder.com/300', title: '景點 6', description: '描述 6', price: 600, rating: '4.3', location: '臺北' },
            { id: 7, image: 'https://via.placeholder.com/300', title: '景點 7', description: '描述 7', price: 700, rating: '4.6', location: '臺中' },
            { id: 8, image: 'https://via.placeholder.com/300', title: '景點 8', description: '描述 8', price: 800, rating: '4.9', location: '高雄' },
            { id: 9, image: 'https://via.placeholder.com/300', title: '景點 9', description: '描述 9', price: 900, rating: '4.4', location: '臺南' },
            { id: 10, image: 'https://via.placeholder.com/300', title: '景點 10', description: '描述 10', price: 1000, rating: '4.1', location: '宜蘭' },
        ];

        // 根據搜索關鍵字和過濾條件過濾結果
        const filteredResults = data.filter(item => {
            const matchesQuery = query ? item.title.includes(query) || item.description.includes(query) : true;
            const matchesFilters = Object.keys(filters).every(filterKey => {
                return filters[filterKey].includes(item[filterKey]);
            });
            return matchesQuery && matchesFilters;
        });

        const sortedResults = sortResults(filteredResults, sortOrder);
        setResults(sortedResults);
    }, [filters, sortOrder, query]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="search-page">
            <header className="search-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="header-content">
                    <h1>{query ? query : '景點門票'}</h1>
                    <p>探索主題樂園、博物館等眾多必遊景點</p>
                </div>
            </header>
            <div className="search-content">
                <FilterSidebar setFilters={setFilters} />
                <div className="search-results-wrapper">
                    <div className="search-controls">
                        <span>找到 {results.length} 項結果</span>
                        <div className="search-sort">
                            <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                                <option value="Lookday 推薦">Lookday 推薦</option>
                                <option value="價格低到高">價格低到高</option>
                                <option value="價格高到低">價格高到低</option>
                                <option value="評分最高">評分最高</option>
                            </select>
                        </div>
                    </div>
                    <div className="search-results-container">
                        {results.length === 0 ? (
                            <div className="no-results">
                                <p>搜索結果為 0，請重新搜索。</p>
                            </div>
                        ) : (
                            <SearchResults results={results} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
