import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateText } from './textSlice';


export function Text() {
    const text = useSelector((state) => state.text.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <input
                    aria-label="Set Text"
                    value={text}
                    onChange={e=>{dispatch(updateText(String(e.target.value)))}}
                />
                <h1>{text}</h1>
            </div>
        </div>
    );
}