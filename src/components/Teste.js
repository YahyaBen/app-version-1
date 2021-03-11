import React from 'react'
import {useState,useEffect} from 'react'
import firebase from '../util/firebase'
import {Liste} from '../util/fonctions'

const Teste =  () => {
    const [A,setA] = useState([])
    useEffect(() => {
        Liste("DateTest")
        .then(e=>{
            console.log(e[0].data());
        })

        
    }, [])
      

    return (
        <>
           LOL {}
        </>
    )
}

export default Teste
