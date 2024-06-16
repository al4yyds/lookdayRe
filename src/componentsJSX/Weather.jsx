import React, { useEffect, useState } from 'react';
import './Weather.scss';

const Weather = () => {
    // 定義狀態變量來存儲天氣數據、加載狀態和選擇的城市
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCity, setSelectedCity] = useState('');

    // 使用useEffect來在組件加載時獲取天氣數據
    useEffect(() => {
        const fetchData = async () => {
            try {
                // 從API獲取天氣數據
                const response = await fetch('https://localhost:7090/api/Weather');
                const data = await response.json();
                // 更新狀態變量
                setWeatherData(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching the weather data", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // 當選擇的城市改變時更新狀態
    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    // 根據天氣描述返回對應的圖片
    const getWeatherImage = (weatherDescription) => {
        const weatherImages = {
            "晴天": "../src/assets/images/weather/01.svg",
            "晴時多雲": "../src/assets/images/weather/02.svg",
            "多雲時晴": "../src/assets/images/weather/03.svg",
            "多雲": "../src/assets/images/weather/04.svg",
            "多雲時陰": "../src/assets/images/weather/04.svg",
            "陰時多雲": "../src/assets/images/weather/05.svg",
            "陰天": "../src/assets/images/weather/07.svg",
            "多雲陣雨": "../src/assets/images/weather/08.svg",
            "多雲短暫雨": "../src/assets/images/weather/08.svg",
            "多雲短暫陣雨": "../src/assets/images/weather/08.svg",
            "午後短暫陣雨": "../src/assets/images/weather/08.svg",
            "短暫陣雨": "../src/assets/images/weather/08.svg",
            "多雲時晴短暫陣雨": "../src/assets/images/weather/08.svg",
            "多雲時晴短暫雨": "../src/assets/images/weather/08.svg",
            "晴時多雲短暫陣雨": "../src/assets/images/weather/08.svg",
            "晴短暫陣雨": "../src/assets/images/weather/08.svg",
            "短暫雨": "../src/assets/images/weather/08.svg",
            "多雲時陰短暫雨": "../src/assets/images/weather/11.svg",
            "多雲時陰短暫陣雨": "../src/assets/images/weather/11.svg",
            "陰時多雲短暫雨": "../src/assets/images/weather/11.svg",
            "陰時多雲短暫陣雨": "../src/assets/images/weather/11.svg",
            "雨天": "../src/assets/images/weather/14.svg",
            "晴午後陰短暫雨": "../src/assets/images/weather/08.svg",
            "晴午後陰短暫陣雨": "../src/assets/images/weather/08.svg",
            "陰短暫雨": "../src/assets/images/weather/11.svg",
            "陰午後短暫陣雨": "../src/assets/images/weather/08.svg",
            "多雲時陰有雨": "../src/assets/images/weather/11.svg",
            "晴時多雲陣雨": "../src/assets/images/weather/14.svg",
            "多雲時晴陣雨": "../src/assets/images/weather/14.svg",
            "陰時多雲有雨": "../src/assets/images/weather/14.svg",
            "陰時多雲有陣雨": "../src/assets/images/weather/14.svg",
            "陰時多雲陣雨": "../src/assets/images/weather/14.svg",
            "陰有雨": "../src/assets/images/weather/14.svg",
            "陰有陣雨": "../src/assets/images/weather/14.svg",
            "陰雨": "../src/assets/images/weather/14.svg",
            "陰陣雨": "../src/assets/images/weather/14.svg",
            "陣雨": "../src/assets/images/weather/14.svg",
            "午後陣雨": "../src/assets/images/weather/14.svg",
            "有雨": "../src/assets/images/weather/14.svg",
            "多雲陣雨或雷雨": "../src/assets/images/weather/18.svg",
            "多雲短暫陣雨或雷雨": "../src/assets/images/weather/18.svg",
            "多雲短暫雷陣雨": "../src/assets/images/weather/18.svg",
            "多雲雷陣雨": "../src/assets/images/weather/18.svg",
            "短暫陣雨或雷雨後多雲": "../src/assets/images/weather/18.svg",
            "短暫雷陣雨後多雲": "../src/assets/images/weather/18.svg",
            "短暫陣雨或雷雨": "../src/assets/images/weather/18.svg",
            "晴時多雲短暫陣雨或雷雨": "../src/assets/images/weather/18.svg",
            "晴短暫陣雨或雷雨": "../src/assets/images/weather/18.svg",
            "多雲時晴短暫陣雨或雷雨": "../src/assets/images/weather/18.svg",
            "午後短暫雷陣雨": "../src/assets/images/weather/18.svg",
            "多雲時陰陣雨或雷雨": "../src/assets/images/weather/18.svg",
            "多雲時陰短暫陣雨或雷雨": "../src/assets/images/weather/18.svg",
            "多雲時陰短暫雷陣雨": "../src/assets/images/weather/18.svg",
            "多雲時陰雷陣雨": "../src/assets/images/weather/18.svg",
            "晴陣雨或雷雨": "../src/assets/images/weather/18.svg",
            "晴時多雲陣雨或雷雨": "../src/assets/images/weather/18.svg",
            "多雲時晴陣雨或雷雨": "../src/assets/images/weather/18.svg",
            "陰時多雲有雷陣雨": "../src/assets/images/weather/18.svg",
            "陰時多雲陣雨或雷雨": "../src/assets/images/weather/18.svg",
            "陰時多雲短暫陣雨或雷雨": "../src/assets/images/weather/18.svg",
            "陰時多雲短暫雷陣雨": "../src/assets/images/weather/18.svg",
            "陰時多雲雷陣雨": "../src/assets/images/weather/18.svg",
            "陰有陣雨或雷雨": "../src/assets/images/weather/18.svg",
            "陰有雷陣雨": "../src/assets/images/weather/18.svg",
            "陰陣雨或雷雨": "../src/assets/images/weather/18.svg",
            "陰雷陣雨": "../src/assets/images/weather/18.svg",
            "晴午後陰短暫陣雨或雷雨": "../src/assets/images/weather/18.svg",
            "晴午後陰短暫雷陣雨": "../src/assets/images/weather/18.svg",
            "陰短暫陣雨或雷雨": "../src/assets/images/weather/18.svg",
            "陰短暫雷陣雨": "../src/assets/images/weather/18.svg",
            "雷雨": "../src/assets/images/weather/18.svg",
            "陣雨或雷雨後多雲": "../src/assets/images/weather/18.svg",
            "陰陣雨或雷雨後多雲": "../src/assets/images/weather/18.svg",
            "陰短暫陣雨或雷雨後多雲": "../src/assets/images/weather/18.svg",
            "陰短暫雷陣雨後多雲": "../src/assets/images/weather/18.svg",
            "陰雷陣雨後多雲": "../src/assets/images/weather/18.svg",
            "雷陣雨後多雲": "../src/assets/images/weather/18.svg",
            "陣雨或雷雨": "../src/assets/images/weather/18.svg",
            "雷陣雨": "../src/assets/images/weather/18.svg",
            "午後雷陣雨": "../src/assets/images/weather/18.svg",
            "晴午後多雲局部雨": "../src/assets/images/weather/19.svg",
            "晴午後多雲局部陣雨": "../src/assets/images/weather/19.svg",
            "晴午後多雲局部短暫雨": "../src/assets/images/weather/19.svg",
            "晴午後多雲局部短暫陣雨": "../src/assets/images/weather/19.svg",
            "晴午後多雲短暫雨": "../src/assets/images/weather/19.svg",
            "晴午後多雲短暫陣雨": "../src/assets/images/weather/19.svg",
            "晴午後局部雨": "../src/assets/images/weather/19.svg",
            "晴午後局部陣雨": "../src/assets/images/weather/19.svg",
            "晴午後局部短暫雨": "../src/assets/images/weather/19.svg",
            "晴午後局部短暫陣雨": "../src/assets/images/weather/19.svg",
            "晴午後陣雨": "../src/assets/images/weather/19.svg",
            "晴午後短暫雨": "../src/assets/images/weather/19.svg",
            "晴午後短暫陣雨": "../src/assets/images/weather/19.svg",
            "晴時多雲午後短暫陣雨": "../src/assets/images/weather/19.svg",
            "多雲午後局部雨": "../src/assets/images/weather/20.svg",
            "多雲午後局部陣雨": "../src/assets/images/weather/20.svg",
            "多雲午後局部短暫雨": "../src/assets/images/weather/20.svg",
            "多雲午後局部短暫陣雨": "../src/assets/images/weather/20.svg",
            "多雲午後陣雨": "../src/assets/images/weather/20.svg",
            "多雲午後短暫雨": "../src/assets/images/weather/20.svg",
            "多雲午後短暫陣雨": "../src/assets/images/weather/20.svg",
            "多雲時陰午後短暫陣雨": "../src/assets/images/weather/20.svg",
            "陰時多雲午後短暫陣雨": "../src/assets/images/weather/20.svg",
            "多雲時晴午後短暫陣雨": "../src/assets/images/weather/20.svg",
            "晴午後多雲陣雨或雷雨": "../src/assets/images/weather/21.svg",
            "晴午後多雲雷陣雨": "../src/assets/images/weather/21.svg",
            "晴午後陣雨或雷雨": "../src/assets/images/weather/21.svg",
            "晴午後雷陣雨": "../src/assets/images/weather/21.svg",
            "晴午後多雲局部陣雨或雷雨": "../src/assets/images/weather/21.svg",
            "晴午後多雲局部短暫陣雨或雷雨": "../src/assets/images/weather/21.svg",
            "晴午後多雲局部短暫雷陣雨": "../src/assets/images/weather/21.svg",
            "晴午後多雲局部雷陣雨": "../src/assets/images/weather/21.svg",
            "晴午後多雲短暫陣雨或雷雨": "../src/assets/images/weather/21.svg",
            "晴午後多雲短暫雷陣雨": "../src/assets/images/weather/21.svg",
            "晴午後局部短暫雷陣雨": "../src/assets/images/weather/21.svg",
            "晴午後局部雷陣雨": "../src/assets/images/weather/21.svg",
            "晴午後短暫雷陣雨": "../src/assets/images/weather/21.svg",
            "晴雷陣雨": "../src/assets/images/weather/21.svg",
            "晴時多雲雷陣雨": "../src/assets/images/weather/21.svg",
            "晴時多雲午後短暫雷陣雨": "../src/assets/images/weather/21.svg",
            "多雲午後局部陣雨或雷雨": "../src/assets/images/weather/22.svg",
            "多雲午後局部短暫陣雨或雷雨": "../src/assets/images/weather/22.svg",
            "多雲午後局部短暫雷陣雨": "../src/assets/images/weather/22.svg",
            "多雲午後局部雷陣雨": "../src/assets/images/weather/22.svg",
            "多雲午後陣雨或雷雨": "../src/assets/images/weather/22.svg",
            "多雲午後短暫陣雨或雷雨": "../src/assets/images/weather/22.svg",
            "多雲午後短暫雷陣雨": "../src/assets/images/weather/22.svg",
            "多雲午後雷陣雨": "../src/assets/images/weather/22.svg",
            "多雲時晴雷陣雨": "../src/assets/images/weather/22.svg",
            "多雲時晴午後短暫雷陣雨": "../src/assets/images/weather/22.svg",
            "多雲時陰午後短暫雷陣雨": "../src/assets/images/weather/22.svg",
            "陰時多雲午後短暫雷陣雨": "../src/assets/images/weather/22.svg",
            "陰午後短暫雷陣雨": "../src/assets/images/weather/22.svg",
            // ... (其他的圖片路徑)
            // 其他天氣描述和對應的圖片
        };
        return weatherImages[weatherDescription] || "/images/weather/default.png";
    };

    // 如果數據還在加載中，顯示加載信息
    if (loading) {
        return <div>Loading...</div>;
    }

    // 根據選擇的城市篩選數據
    const filteredData = weatherData.filter(location => selectedCity === '' || location.locationName === selectedCity);

    // 格式化時間段，判斷是白天還是晚上
    const formatTimePeriod = (time) => {
        const hour = new Date(time).getHours();
        return hour < 18 ? '白天' : '晚上';
    };

    // 根據日期字串獲取星期幾
    const getWeekday = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('zh-TW', { weekday: 'short', month: '2-digit', day: '2-digit' });
    };

    // 將天氣數據按日期和時間段分組
    const groupWeatherByDate = (weatherDetails) => {
        const groupedWeather = {};
        weatherDetails.forEach(detail => {
            const date = detail.startTime.split(' ')[0];
            const timePeriod = formatTimePeriod(detail.startTime);
            if (!groupedWeather[date]) {
                groupedWeather[date] = {};
            }
            groupedWeather[date][timePeriod] = detail;
        });
        return groupedWeather;
    };

    return (
        <div className="weather-container">
            <h1>未來一週天氣</h1>
            <div className="city-selector">
                <label htmlFor="city">選擇城市: </label>
                <select id="city" value={selectedCity} onChange={handleCityChange}>
                    <option value="">選擇城市</option>
                    {weatherData.map((location, index) => (
                        <option key={index} value={location.locationName}>{location.locationName}</option>
                    ))}
                </select>
            </div>
            {selectedCity && filteredData.map((location, index) => {
                // 按日期分組的天氣數據
                const groupedWeather = groupWeatherByDate(location.weatherDetails);
                // 取前七天的日期
                const dates = Object.keys(groupedWeather).slice(0, 7);

                return (
                    <div key={index} className="city-weather">
                        <h2>{location.locationName}</h2>
                        <table className="weather-table">
                            <thead>
                                <tr>
                                    <th>時間</th>
                                    {dates.map((date, idx) => (
                                        <th key={idx}>{getWeekday(date)}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {['白天', '晚上'].map((timePeriod, idx) => (
                                    <tr key={idx}>
                                        <td>{timePeriod}</td>
                                        {dates.map((date, idx) => {
                                            const detail = groupedWeather[date][timePeriod];
                                            return detail ? (
                                                <td key={idx} className="weather-detail">
                                                    <p>{detail.weatherDescription}</p>
                                                    <img src={getWeatherImage(detail.weatherDescription)} alt={detail.weatherDescription} />
                                                    <p>溫度: {detail.temperature}°C</p>
                                                </td>
                                            ) : (
                                                <td key={idx} className="weather-detail">
                                                    <p>無數據</p>
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            })}
        </div>
    );
};

export default Weather;
