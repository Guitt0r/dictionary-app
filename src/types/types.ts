export type WordType = {
    original: string,
    translation: string
}
export type QuestionType = {
    word: string,
    answers: string[],
    correctAnswer: string
}

export type AnsweredQuestionType = QuestionType & {
    userAnswer: string
}
export type TestType = {
    score: number
    questions: AnsweredQuestionType[]
}