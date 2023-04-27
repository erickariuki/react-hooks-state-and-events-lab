event.preventDefault();
fetch("http://localhost:3002/questions", {
  method: "POST",
  headers: {
  headers:{
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
  body:JSON.stringify({
    prompt: formData.prompt,
    answers: [
      formData.answer1,
function QuestionForm(props) {
  }),
});
}

import React from React

function QuestionItem({ question,onDeleteClick, onAnswerChange}) {
function QuestionItem({ question, onDeleteClick, onAnswerChange}) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
function QuestionItem({ question,onDeleteClick, onAnswerChange}) {
    </option>
  ));

function handleDeleteClick(){
  onDeleteClick(id);
  }
function handleAnswerChange (e) {
  onAnswerChange(id,parseInt(e.target.value));
  }
function handleAnswerClick(event){
  onAnswerChange(id, parseInt(event.target.value));
  }

  return (
function QuestionItem({ question,onDeleteClick, onAnswerChange}) {
      <><h5>Prompt: {prompt}</h5><label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleAnswerChange}>{options}</select>
        <select defaultValue={correctIndex} onChange={handleAnswerClick}>
            {options}
        </select>
    </label><button onClick={handleDeleteClick}>Delete Question</button></>
    </li>
  );
}

export default QuestionItem;
export default QuestionItem;

import React,{useState,useEffect} from "react";
import QuestionItems from "./QuestionItem";
import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [question,setQuestions]=useState([]);
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((resp) => resp.json())
      .then((questions) => {
        setQuestions(questions);
      });
  }, []);
    useEffect(()=>{
      fetch("http://localhost:4000/questions")
      .then(res => res.json())
      .then(questions =>setQuestions(questions));
    },[]);

  function handleDeleteClick(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => {
        const updatedQuestions = question.filter((query) => query.id !== id);
        setQuestions(updatedQuestions);
    function handleDeleteClick(id){
      fetch(`http://localhost:4000/questions/${id}`,{
        method: "DELETE",
      })
      .then((r)=>r.json())
      .then(()=>{
        const updatedQuizList = questions.filter((q)=>q.id !== id);
        setQuestions(updatedQuizList);
      });
  }
    }

function handleAnswerChange(id, correctIndex) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correctIndex }),
    })
      .then((resp) => resp.json())
      .then((updatedQuestion) => {
        const updatedQuestions = question.map((query) => {
          if (query.id === updatedQuestion.id) return updatedQuestion;
          return query;
function handleAnswerChange(id, correctIndex){
    fetch(`http://localhost:4000/questions/${id}`,{
        method: "PATCH",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({correctIndex})
      })
      .then((r)=>r.json())
      .then(()=>{
        const updatedQuizList = questions.map((question)=>{
          if(question.id === updatedQuizList.id)
            return updatedQuizList;
            return question;
        });
        setQuestions(updatedQuestions);
        setQuestions(updatedQuizList)
      });
  }
    }

const questionItems = question.map((query) => (
    <QuestionItems
      key={query.id}
      question={query}
const questionItems = questions.map((question)=>(
    <QuestionItem 
      key={question.id}
      question={question}
      onDeleteClick={handleDeleteClick}
      onAnswerChange={handleAnswerChange}
    />
function QuestionList() {
  );
}

export default QuestionList;
export default QuestionList;