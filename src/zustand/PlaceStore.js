import {create} from 'zustand';
import { folderdata } from '../data';

export const placeStore = create(()=>({
    folderlist : folderdata,
    add_del_folder : folderdata
}))