import create from 'zustand';

export const MapStore = create((set)=>({
  map: null, // Initial map state is null
  setMap: (newMap) => set({ map: newMap }),
}))