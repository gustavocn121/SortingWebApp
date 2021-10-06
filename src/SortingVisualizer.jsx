import React from "react";
import { useState } from "react";


function SortingVisualizer(props) {
    const[n,setN] = useState(1)
    const [ArrayObject, setArrayObject] = useState(
            {
                'numbersArray': [1,5,8,4,5,6],
                'stepsArray': [],
                'ordered':[false, {'algorithm': '', 'orderedArray': [], 'iterCount': 0,}]
            }
        )

    function imprimeItem(i) {
        return <li>{i}</li>
    }

    function imprimeArraySlot(i) {
        return<input className="arraySlot" type="number"></input>
    }
    
    function range(size, startAt = 0) {
        return [...Array(size).keys()].map(i => i + startAt);
    }

    
    function BubbleSort() {
        
        var i=0;
        var stepsArray=[];
        var steps = 0;
        var array = ArrayObject.numbersArrays;
        var ult = array.length;
        var num_trocas=0;

        for (i = 0; i < array.length; i++) {
            
            for (let j = 0; j < ult ; j++) {
                steps +=1;
                if (array[j] > array[j+1]) {
                    let temp = array[j+1];
                    array[j+1] = array[j];
                    array[j] = temp;
                    num_trocas+=1;
                    stepsArray.push(array);
                }
                
            } 

            ult -=1;
            if (num_trocas === 0) {
                break;
            }
            
        }

        var obj =
        {
            'numbersArray': ArrayObject.numbersArray,
            'stepsArray': stepsArray,
            'ordered':[true, {'algorithm': 'BubbleSort', 'orderedArray': array, 'steps': steps}]
        }

        setArrayObject(obj);
    }
    

    function atualizaArray() {
        let els = document.getElementsByClassName("arraySlot") 
        let newArray = []
        for (let k = 0; k < els.length; k++) {
            if (els[k].value.trim() === "") {
                els[k].value = 0
            }
                newArray.push(parseInt(els[k].value))

            
        }

        let obj =
        {
            'numbersArray': newArray,
            'stepsArray':  ArrayObject.stepsArray,
            'ordered': ArrayObject.ordered
        }
        setArrayObject(obj);
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
                    <button className="btn btn-success"  onClick={()=> atualizaArray()}> Update array</button>
                </div>
            </div>
        </div>
        <div className="sort-btns">
            <button onClick={() => {var l =BubbleSort();setArrayObject(l);}} className="btn">BubbleSort</button>
        </div>
        <ul className="arrayList d-inline-flex">
            Array = [{ArrayObject.numbersArray.map(imprimeItem)}]
        </ul>

        <div className="output col-12">

        </div>

    </div>
        );
};

export default SortingVisualizer;