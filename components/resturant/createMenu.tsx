import React,{useEffect, useState} from 'react';
import QRCodeGenerator from '../qr_code';
import {Box, Input, TextField} from '@material-ui/core'
import { useSession } from 'next-auth/react';

const ariaLabel = { 'aria-label': 'description'}

const CreateMenu = () => {

    const {data: session} = useSession();

    const [value,setValue] = useState('');

    const [data,setData] = useState([]);

    const onSubmit = (e: any) => {
        e.preventDefault();
        let joined = data.concat(value as any);
        setData(joined);
        setValue('')
    }

    return(
        <>
        {   session &&
            <>
                <form onSubmit={onSubmit}>
                    <input type="text" value={value} name="" id="" onChange={(e)=>setValue(e.target.value)}/>
                    <input type="submit" />
                </form>
                {
                    data.map((v,index)=>{
                        return(<ul>
                            <h3>QR generator url : {v} </h3>
                            <li key={index}><QRCodeGenerator url={v}/></li>
                        </ul>)
                    })
                }
            </>
        }
        </>
    )
}

export default CreateMenu;