import { validateUsername } from './validator/quiz-validator';
import { Request, Response } from "express";
import { generateQuizId } from '../utils/generate-quiz-id';
import Quiz from './model/quiz-model';
import SuccessResponse from '../utils/success-response';
import Kora from '../category/kora/model/kora-model';
import { data } from '../category/kora/data';

export const startQuiz=async(req:Request,res:Response):Promise<void>=>{
    const validation = validateUsername(req.body);
    if (validation.error) {
      res.status(400).json({ error: validation.error.details[0].message });
      return;
    }
    const{username}=validation.value
const quizId=generateQuizId()
const quiz= await Quiz.create({
    quizId
})
SuccessResponse.send(res,quiz,username)
}


export const upload=async(req:Request,res:Response):Promise<void>=>{
  const{id,options,answer,question}=req.body

const quiz= await Kora.create({
  id,
  options,
  answer,
  question
})
SuccessResponse.send(res,quiz)
}
