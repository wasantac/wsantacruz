import React,{useState,useEffect} from 'react';
import '../css/LetraMovimiento.css';
const LetraMovimiento = ({texto}) => {
    const [spanList,setSpanList] = useState([]);
    const [load,setLoad] = useState(false);
    useEffect(() => {
        if(!load){
            let lista = texto.split('');
            let finalList = [];
            for(let letra of lista){
                finalList.push(
                    letra
                )
            }
            setSpanList(finalList);
            setLoad(true);
        }

    },[load,texto])
    

    return (
        <>
            {!load ? <></> : spanList.map((item,i) => {
                return(                
                <span className="letra-color" key={`color${i}`}>
                    {item}
                </span>)
            })}
        </>
    );
}

export default LetraMovimiento;
