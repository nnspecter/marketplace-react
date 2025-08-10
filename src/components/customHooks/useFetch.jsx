import { useEffect, useState } from 'react';
const useFetch = (url) => {
    const [data, setData] = useState({products: []});
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState('');
    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true);
            setError('');
            try{
                const response =  await fetch(url);
                if(!response.ok){
                    throw new Error("Ошибка на сервере");
                }
                const result = await response.json();
                setData(result);
            }
            catch(err){
                setError(err.message);
            }
            finally{
                setLoading(false)
            }
        }
        fetchData();
    },[url])
   
   return {data, loading, error}
}

export default useFetch