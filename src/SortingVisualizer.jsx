import React from "react";
import { useState } from "react";
import './styles/SortingVisualizer.css';

function SortingVisualizer(props) {
    const[n,setN] = useState(1)
    const [numArray,setArray] = useState([1,5,8,4,5,6])

    function imprimeItem(i) {
        return <li>{i}</li>
    }

    function imprimeArraySlot(i) {
        return<input className="arraySlot" type="number" onkeypress='validate(event)'></input>
    }
    
    function range(size, startAt = 0) {
        return [...Array(size).keys()].map(i => i + startAt);
    }
    function atualizaArray() {
        let els = document.getElementsByClassName("arraySlot") 
        let newArray = []
        for (let k = 0; k < els.length; k++) {
            newArray.push(els[k].value)
        }
        setArray(newArray)
    }



    return (

    <div className="SortingVisualizer">
        <div className="n-form">
            <p>Numero de items: {n}</p>
            <div>
                {range(n).map(imprimeArraySlot)}
            </div>
           <div className="buttons-div"> 
                <div>
                    <button disabled={n>=10?true:false} id="plusBtn" className="btn btn-primary" onClick={() => {setN(n + 1);}} >+</button>
                    <button disabled={n<=1?true:false} id="lessBtn" className="btn btn-primary" onClick={() => {setN(n - 1);}} >-</button>
                </div>
                <div>
                    <button className="btn btn-success"  onClick={()=> atualizaArray()}> go</button>
                </div>
            </div>
        </div>
        <ul className="arrayList d-inline-flex">
            Array = [{numArray.map(imprimeItem)}]
        </ul>

    </div>
        );
};

export default SortingVisualizer;