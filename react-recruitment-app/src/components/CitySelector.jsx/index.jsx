import React, { useState, useEffect, useCallback } from "react";

import { NavBar } from "antd-mobile";
import "./index.less";

//右列表
const AlphaIndex = (props) => {
  const { onClick } = props;
  const alphabet = Array.from(new Array(26), (ele, index) => {
    return String.fromCharCode(65 + index);
  });
  alphabet.unshift("#");
  return (
    <div className="city-index">
      {alphabet.map((alpha) => {
        return (
          <i
            className="city-index-item"
            key={alpha}
            onClick={() => onClick(alpha)}
          >
            {alpha}
          </i>
        );
      })}
    </div>
  );
};
//单个城市
const CitySelection = (props) => {
  const { title, cities = [], onSelect } = props;
  return (
    <ul className="city-ul">
      <li className="city-li" key="title" data-cate={title}>
        {title}
      </li>
      {cities.map((city) => {
        return (
          <li
            className="city-li"
            key={city.name}
            onClick={() => onSelect(city.name)}
          >
            {city.name}
          </li>
        );
      })}
    </ul>
  );
};

export const CitySelector = (props) => {
  const {
    showCitySelector,
    queryCities,
    setShowCitySelector,
    setExpectationCity,
  } = props;
  let [cityList, setCityList] = useState([]);
  let [hotCities, setHotCities] = useState([]);
  const selectCity = (city) => {
    setExpectationCity(city);
    setShowCitySelector(false);
  };
  useEffect(() => {
    queryCities().then((data) => {
      data?.cityList && setCityList(data.cityList);
      data?.hotCities && setHotCities(data.hotCities);
    });
  }, []);

  // 右轴跳转
  const toAlpha = useCallback((alpha) => {
    document.querySelector(`[data-cate='${alpha}']`).scrollIntoView();
  }, []);
  if (!showCitySelector) {
    return <></>;
  }
  return (
    <div className="city-selector">
      <NavBar
        className="city-nav"
        back="返回"
        onBack={() => {
          setShowCitySelector(false);
        }}
      >
        城市选择
      </NavBar>
      <div className="city-list">
        <div className="city-cate">
          {/* 城市列表 */}
          {
            <CitySelection
              key="#"
              title="#"
              cities={hotCities}
              onSelect={setExpectationCity}
            />
          }
          {cityList.map((selection) => {
            return (
              <CitySelection
                key={selection.title}
                title={selection.title}
                cities={selection.cities}
                onSelect={selectCity}
              />
            );
          })}
        </div>
        <div className="city-index">
          <AlphaIndex onClick={toAlpha} />
        </div>
      </div>
    </div>
  );
};
