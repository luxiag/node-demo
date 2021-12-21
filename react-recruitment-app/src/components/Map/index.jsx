import React, { useState, useEffect } from "react";
import { Toast, NavBar, Input, Button } from "antd-mobile";
import { LocationFill } from "antd-mobile-icons";

import "./index.less";
import { useDebounce } from "utils";
import { useNavigate, useSearchParams } from "react-router-dom";
export const Map = () => {
  let map;
  let center;
  let mapGeo;
  let [location, setLocation] = useState({});
  //路由
  let navigate = useNavigate();
  useEffect(() => {
    initMap();
  }, []);

  const initMap = () => {
    map = new window.BMap.Map("container");
    map.centerAndZoom(new window.BMap.Point(116.404, 39.915), 15);
    mapGeo = new window.BMap.Geocoder({ extensions_town: true });
    map.addControl(
      new window.BMap.NavigationControl({
        type: window.BMAP_NAVIGATION_CONTROL_LARGE,
      })
    );
    map.addControl(new window.BMap.ScaleControl());
    map.addControl(new window.BMap.OverviewMapControl());
    map.addControl(new window.BMap.MapTypeControl());
    map.addControl(new window.BMap.GeolocationControl());
    map.setCurrentCity("广州");
    map.addEventListener("dragend", function () {
      center = map.getCenter();
      // console.log(center, "center");
      getLocation();
    });
    map.addEventListener("click", (e) => {
      // console.log(e, "e");
      // center = e.yf;
      center = map.getCenter();
      map.panBy(
        window.innerWidth / 2 - e.offsetX,
        window.innerHeight / 2 - e.offsetY
      );
      getLocation();
    });
    map.addEventListener("locationSuccess", (e) => {
      console.log(e, "locationSuccess");
    });
    map.addEventListener("locationError", () => {
      Toast.show({
        icon: "fail",
        content: "定位失败",
      });
    });

    // let marker = new window.BMap.Marker(new window.BMap.Point(116.404, 39.915));
    // map.addOverlay(marker);
  };
  const getLocation = () => {
    mapGeo.getLocation(
      new window.BMap.Point(center.lng, center.lat),
      (result) => {
        setLocation({ address: result.address, center });
      }
    );
  };
  const updateLocation = () => {
    localStorage.setItem("companyLocation", JSON.stringify(location));
    navigate(-1);
  };

  return (
    <div id="map">
      <NavBar
        className="city-nav"
        back="返回"
        onBack={() => {
          navigate(-1);
        }}
      >
        选择地址
      </NavBar>
      <div className="map-location">
        <Input
          placeholder="请输入内容"
          value={location?.address || ""}
          disabled
        />
        <Button color="primary" onClick={updateLocation}>
          确认
        </Button>
      </div>
      <div className="map-center">
        <LocationFill />
      </div>
      <div id="container"></div>
    </div>
  );
};
