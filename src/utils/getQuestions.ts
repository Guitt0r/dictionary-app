import {QuestionType, WordType} from "../types/types.ts";
import {getRandomElementsFromArray} from "./getRandomElementsFromArray.ts";


export function getQuestions(words: WordType[]) {
    const quizWords: WordType[] = getRandomElementsFromArray(words, 10)
    const questions: QuestionType[] = []
    for (let i = 0; i < quizWords.length; i++) {
        const word = quizWords[i]
        const correctTranslation = word.translation

        let translations = quizWords
            .map(word => word.translation)
            .filter(translation => translation !== correctTranslation)

        translations = translations.slice(0, 3)
        translations.push(correctTranslation)

        const shuffledTranslations = getRandomElementsFromArray(translations)
        questions.push({
            word: word.original,
            answers: shuffledTranslations,
            correctAnswer: correctTranslation
        })
    }
    return questions
}