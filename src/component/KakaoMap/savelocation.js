import axios from 'axios';

export const saveLocation = async (name, address, phone, latitude, longitude) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/save_location/', {
      name: name,
      address: address,
      phone: phone,
      latitude: latitude,
      longitude: longitude,
    });

    if (response.status === 200) {
      console.log(response.data.message); // 서버로부터의 응답 메시지 출력
    } else {
      console.error('서버 오류:', response.status);
    }
  } catch (error) {
    console.error('오류 발생:', error);
  }
};