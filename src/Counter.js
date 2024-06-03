import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {mul} from './mulSlice'
import {add} from './addSlice'
import {sub} from './subSlice'
import {div} from './divSlice'


export function Counter() {
    const count = useSelector((state) => state.mul.value);
    const count2 = useSelector((state) => state.add.value2);
    const count3 = useSelector((state) => state.sub.value3);
    const count4 = useSelector((state) => state.div.value4);

    const dispatch = useDispatch();

    const [multiplier, setMultiplier]= useState(0);
    const [multiplicand, setMultiplicand] = useState(0);

    const [addend, setAddend]= useState(0);
    const [summand, setSummand]= useState(0);

    const [subtrahend, setsubtrahend]= useState(0);
    const [minuend, setminuend]= useState(0);

    const [divisor, setdivisor]= useState(0);
    const [quotient, setquotient]= useState(0);

    return (
        <div>
            <div>
                乘
                <input
                    value={multiplier}
                    onChange={e => setMultiplier(e.target.value)}
                />
                X
                <input
                    value={multiplicand}
                    onChange={e => setMultiplicand(e.target.value)}
                />
                ={count}
                <button
                    onClick={()=>
                     dispatch(mul({"multiplier": multiplier, "multiplicand": multiplicand}))}
                    >
                    Count
                </button>
                <br></br>
                
                加
                <input
                    value={addend}
                    onChange={e => setAddend(e.target.value)}
                />
                +
                <input
                    value={summand}
                    onChange={e => setSummand(e.target.value)}
                />
                ={count2}
                <button
                    onClick={()=>
                    dispatch(add({"addend": addend, "summand": summand}))}
                    >
                    Count
                </button>
                <br></br>

                減
                <input
                    value={subtrahend}
                    onChange={e => setsubtrahend(e.target.value)}
                />
                -
                <input
                    value={minuend}
                    onChange={e => setminuend(e.target.value)}
                />
                ={count3}
                <button
                    onClick={()=>
                    dispatch(sub({"subtrahend": subtrahend, "minuend": minuend}))}
                    >
                    Count
                </button>
                <br></br>

                除
                <input
                    value={divisor}
                    onChange={e => setdivisor(e.target.value)}
                />
                /
                <input
                    value={quotient}
                    onChange={e => setquotient(e.target.value)}
                />
                ={count4}
                <button
                    onClick={()=>
                    dispatch(div({"divisor": divisor, "quotient": quotient}))}
                    >
                    Count
                </button>
            </div>
        </div>
    )
}
