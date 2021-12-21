import React, { useState, useEffect } from "react";
import { Toast, NavBar, Input, Button } from "antd-mobile";
import { LocationFill } from "antd-mobile-icons";

import "./index.less";
import { useDebounce } from "utils";
export const Map = () => {
  let map;
  let center;
  let mapGeo;
  let [location, setLocation] = useState(useDebounce(""));
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
      center = e.yf;
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

    let marker = new window.BMap.Marker(new window.BMap.Point(116.404, 39.915));
    map.addOverlay(marker);
  };
  const getLocation = () => {
    mapGeo.getLocation(
      new window.BMap.Point(center.lng, center.lat),
      (result) => {
        // console.log(result, "result");
        setLocation(result.address);
      }
    );
  };
  const updateLocation = (val) => {
    if (val === "" || val == null || val === {} || val.length < 6) return;
    mapGeo.getPoint(val, (point) => {
      if (!point) return;
      map.centerAndZoom(point, 16);
    });
    // setLocation(val);
  };
  return (
    <div id="map">
      <NavBar className="city-nav" back="返回" onBack={() => {}}>
        选择地址
      </NavBar>
      <div className="map-location">
        <Input
          placeholder="请输入内容"
          value={location}
          // onChange={(val) => updateLocation(val)}
          // clearable
          disabled
        />
        <Button
          color="primary"
          onClick={() => {
            console.log(location, "location");
          }}
        >
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
