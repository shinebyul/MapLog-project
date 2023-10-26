// SearchPlace.js
import React, { useState } from 'react';
import { SearchStore } from '../../zustand/SearchStore';
import MapContainer from './Mapcontainer';
import { MapStore } from '../../zustand/MapStore';

const SearchPlace = () => {
  const [inputText, setInputText] = useState('');
  //const [place, setPlace] = useState('');
  const {searchOn}=SearchStore();

  const {place}=SearchStore();

  const {map}=MapStore();

  const onChange = (e) => {
    setInputText(e.target.value);
    SearchStore.setState({place:""});
  };

  //SearchStore.setState({place:""});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    SearchStore.setState({place:inputText});
    //setPlace(inputText);
    setInputText("");
    SearchStore.setState({searchOn:true});
  };

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit} style={{position:'absolute', zIndex:'20', right:'20px', top:'30px'}}>
        <input placeholder="Search Place..." style={{border:'none', borderRadius:'5px', marginRight:'5px' }} onChange={onChange} value={inputText} />
        <button type="submit">검색</button>
      </form>
      {/* <MapContainer place={place} /> */}
    </>
  );
};

export default SearchPlace;