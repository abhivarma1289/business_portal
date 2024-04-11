import axios from "axios";

const API = axios.create({
    baseURL: 'https://expandables.divami.com/be/',
});



export const getValues= async ()=>{
    const values = await API.get('expandables');
    console.log('values',values);
    return values;
}



export const getValuesById=async (id)=>{
    const value=await API.get('expandables/'+id);
    console.log('valuebyId',value);
    return value;
}


export const postValues = async (data) => {
    const result = await API.post('expandables', data);
    return result;
  };