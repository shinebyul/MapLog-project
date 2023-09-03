import React from "react";
import { useEffect, useState, useRef } from "react";
import MiniBar from "./MiniBar";

const {kakao}=window;

function Map(){

    const container = useRef(null); // 지도를 담을 영역의 DOM 레퍼런스
    const [map, setMap] = useState(null); // 지도 인스턴스를 저장할 state
    

    // 지도 초기화
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도

            const locPosition = new window.kakao.maps.LatLng(lat, lon);
        });

        if (container.current) {
            const options = {
                center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                level: 3,
            };

            const initialMap = new window.kakao.maps.Map(container.current, options);
            setMap(initialMap);
        }
    }, []); //[container]
   

    // 위치에 마커 생성
    const placeMarker = (props) => {
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도

            const locPosition = new window.kakao.maps.LatLng(lat, lon);
            const marker = new window.kakao.maps.Marker({ position: locPosition });

            marker.setMap(map);
            map.setCenter(locPosition); // 마커가 위치한 중심으로 이동
        });
        } else {
        alert("현재 위치를 받아오지 못했습니다.");
        }
    };



    return(
        <>
            <div id='map' ref={container}></div> 
            <MiniBar placeMarker={placeMarker}/>
        </>
    );
}
export default Map;


{

    /*
     
    useEffect(() => {
        if (map) {
            const clickListener = kakao.maps.event.addListener(map, "click", function (
                mouseEvent
            ) {
                searchDetailAddrFromCoords(mouseEvent.latLng, function (result, status) {
                    if (status === kakao.maps.services.Status.OK) {
                        var detailAddr = !!result[0].road_address
                            ? result[0].place_name+'<br></br>'
                            : "";
                        detailAddr +=result[0].road_address.address_name+'<br></br>';
                        detailAddr += result[0].address.address_name+'<br></br>';

                        var marker = new kakao.maps.Marker({
                            position: mouseEvent.latLng,
                        });
                        marker.setMap(map);

                        var infowindow = new kakao.maps.InfoWindow({
                            content: detailAddr,
                            zIndex: 300,
                        });
                        infowindow.open(map, marker);
                    }
                });
            });

            return () => {
                kakao.maps.event.removeListener(clickListener);
            };
        }
    }, [map]);

    function searchDetailAddrFromCoords(coords, callback) {
        geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    }

    var geocoder = new kakao.maps.services.Geocoder();
    */
}