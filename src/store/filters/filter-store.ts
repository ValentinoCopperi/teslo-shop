import { create } from 'zustand'
interface State {
    maxValue : number;
    handleMaxValue : (value : number) => void;
    sortMaxToMin:boolean;
    handleSort : (value : boolean) => void;
}
export const useStoreFilter = create<State>()((set) => ({
   maxValue : 300,
   handleMaxValue : (value : number) => set({maxValue: value }),
   sortMaxToMin : true,
   handleSort : (value : boolean) => set({sortMaxToMin : value})
}));