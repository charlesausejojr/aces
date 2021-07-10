import React, {useState,useEffect} from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './Question.css'
import {useDispatch} from 'react-redux'
import db from '../firebase'
import {setQuestion} from '../features/questionSlice'

function Question({id, timestamp, questionName}) {

    const dispatch = useDispatch();
    
    return (
        <div onClick={() => {
            dispatch(
                setQuestion({
                    questionId: id,
                    questionName: questionName,
                })
            )
        }}
        
        className='question'>
            <div className="question__timestamp">
                <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
            </div>
            <h3><span><ArrowForwardIosIcon style={{fontSize: '15px'}}/></span>{questionName}</h3>
        </div>
    )
}

export default Question
