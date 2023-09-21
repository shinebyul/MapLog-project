// SearchPlace.js
import React, { useState } from 'react';
import { SearchStore } from '../../zustand/SearchStore';
import MapContainer from './Mapcontainer';

const SearchPlace = () => {
  const [inputText, setInputText] = useState('');
  //const [place, setPlace] = useState('');
  const {searchOn}=SearchStore();

  const {place}=SearchStore();

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SearchStore.setState({place:inputText});
    //setPlace(inputText);
    SearchStore.setState({searchOn:true});
    setInputText('');
  };

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit} style={{position:'absolute', zIndex:'20', right:'20px', top:'30px'}}>
        <input placeholder="Search Place..." onChange={onChange} value={inputText} />
        <button type="submit">검색</button>
      </form>
      {/* <MapContainer searchPlace={place} /> */}
    </>
  );
};

export default SearchPlace;