import { Card, CardContent, LinearProgress } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import './Interact.css'
import ChatIcon from '@material-ui/icons/Chat';
import db from '../firebase'
import Question from '../components/Question'
import Answer from '../components/Answer'
import firebase from 'firebase'
import { useSelector } from 'react-redux'
import { selectQuestionName, selectQuestionId } from '../features/questionSlice'
import { selectUser } from '../features/userSlice'


function Interact() {

    const user = useSelector(selectUser);
    const questionName = useSelector(selectQuestionName);
    const questionId = useSelector(selectQuestionId);
    const [input,setInput] = useState("");
    const [reply,setReply] = useState("");
    const [answer,setAnswer] = useState([]);
    const [questions,setQuestions] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        db.collection("questions").orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
            setQuestions(
                snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            })));
            setLoading(true);
        });
    }, []);
    /* When clicking the question div, it will dispatch info to redux that will then be read 
    to this useEffect below that will show the info based from the questionId
    */
    useEffect(() => {
        if(questionId){
            db.collection("questions")
            .doc(questionId)
            .collection("answers")
            .orderBy('timestamp', 'desc')
            .onSnapshot( snapshot => 
            setAnswer(snapshot.docs.map( doc => ({
                id: doc.id,
                data: doc.data()
            }))));
        }

       
    },[questionId]);
    

    const sendQuestion = (e) => {
        e.preventDefault();
        db.collection("questions").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            questionName: input,
        });
        setInput("");
    };

    const sendAnswer = (e) => {
        e.preventDefault();
        db.collection("questions")
        .doc(questionId)
        .collection("answers")
        .add({
            uid: user.uid,
            photo: user.photo,
            email: user.email,
            displayName: user.displayName,
            message: reply,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setReply("");
    };


    return (
        <div className='interact'>
            <Card>
            <CardContent>
             <h1><span><ChatIcon/></span> Ask an Eagle<span><small className='interact__reminder'> Select a topic to participate.</small></span></h1>
              
              <div className="interact__qna">
              
                    <div className="interact__questions">
                    {!loading?<LinearProgress/>:<>
                        {questions.map(({id, data: { timestamp, questionName } }) => (
                        <Question key={id} id={id} timestamp={timestamp} questionName={questionName}/>
                        ))} 
                    </>}
                        
                    </div>

                    <div className="interact__right">
                    
                        <div className="interact__answers">

                            <div className="interact__answerInfo">
                                {answer.map(({id, data}) => (
                                    <Answer key={id} id={id} contents={data}/>
                                    ))}  
                            </div>



                            </div>
                            <div className="interact__input">
                                <form>
                                    <input
                                    value={reply}
                                    onChange={(e) => {setReply(e.target.value)}}
                                    placeholder="Type response" type="text"/>
                                    <button onClick={sendAnswer}></button>
                                </form>
                            </div>

                    </div>
                  
              </div>
                

             <div className="interact__input">
                <form>
                    <input
                    value={input}
                    onChange={(e) => {setInput(e.target.value)}}
                    placeholder="Ask a question" type="text"/>
                    <button onClick={sendQuestion}></button>
                </form>
            </div>
            </CardContent>
        </Card>
        </div>
    )
}

export default Interact
