import {create} from 'zustand';

export const SearchStore = create(()=>({
    searchOn : false,
}))