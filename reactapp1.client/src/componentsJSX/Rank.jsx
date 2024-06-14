import React, { useEffect, useState } from 'react';
import './Rank.scss';

// �w�q Rank �ե�
const Rank = () => {
    // �ŧi���A�ܼ� ranklists�Bloading �M error
    const [ranklists, setRanklists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // �ϥ� useEffect �_�l�b�ե󱾸������Ƨ@��
    useEffect(() => {
        // �w�q���B��ƨ�����̼���������
        const fetchTopBookedActivities = async () => {
            try {
                // �q���w�� API ����ƾ�
                const response = await fetch('https://localhost:7090/api/activities/top-booked');
                if (!response.ok) {
                    // �p�G�T�������`�A�ߥX���~
                    throw new Error('Network response was not ok');
                }
                // �ѪR JSON �ƾ�
                const data = await response.json();
                console.log('API response data:', data);
                // �N�ƾڤ���
                const groupedData = groupDataByCity(data);
                console.log('Grouped data:', groupedData);
                // ��s���A
                setRanklists(groupedData);
                setLoading(false);
            } catch (error) {
                // �B�z���~
                console.error('Error fetching top booked activities:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        // �ե�����ƾڪ����
        fetchTopBookedActivities();
    }, []); // �Ũ̿�Ʋժ�ܳo�� effect �u�|�b�ե󱾸��M�����ɰ���@��

    // �w�q��ƨӮھ� City ID �N�ƾڤ���
    const groupDataByCity = (data) => {
        const grouped = data.reduce((acc, activity) => {
            const cityId = activity.cityId;
            const cityName = activity.cityName; // ���]��^�ƾڤ��]�t cityName
            if (!acc[cityId]) {
                acc[cityId] = {
                    cityName: cityName,
                    activities: []
                };
            }
            acc[cityId].activities.push(activity);
            return acc;
        }, {});

        // �ഫ���յ��G�åu���e�T�Ӥ���
        return Object.values(grouped).slice(0, 3);
    };

    // �p�G���b�[���A��ܥ[�����ܾ�
    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading...</p>
            </div>
        );
    }

    // �p�G�X�{���~�A��ܿ��~�H���M���ի��s
    if (error) {
        return (
            <div className="error-container">
                <p>Error: {error}</p>
                <button onClick={() => window.location.reload()}>Try Again</button>
            </div>
        );
    }


    // ��V�ƦW�C��
    return (
        <section className="sectionRank">
            <h2 className="rank-title">Top Ranked Products</h2>
            <p className="rank-subtitle">Explore our most popular products.</p>
            <div className="product-rankings">
                {ranklists.length === 0 ? (
                    // �p�G�S���ƾڡA��ܴ��ܫH��
                    <p>No data available</p>
                ) : (
                    // �M���ƦW�C��ô�V�C�Ӥ���
                    ranklists.map((ranklist, index) => (
                        <div key={index} className="product-ranking">
                            <h2>Top {index + 1}: {ranklist.cityName}</h2>
                            <ul>
                                {ranklist.activities.map((product, productIndex) => (
                                    <li key={product.activityId} className="product-item">
                                        <span className="rank">#{productIndex + 1}</span>
                                        <span className="name">{product.name}<br />
                                            <span className="description">{product.description}</span>
                                        </span>
                                        {/* <span className="booking-count">{product.bookingCount} bookings</span> */}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};

// �ץX Rank �ե�
export default Rank;
