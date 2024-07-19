import KoraInfo from "./model/kora-info-model";

export const getKoraQuizById = async (quesId: number) => {
  const quiz = await KoraInfo.findOne({ where: { quesId } });
  if (!quiz) {
    throw new Error("Quiz not found");
  }
  return quiz;
};

export const getAllQuizIds = async (): Promise<number[]> => {
  try {
    const quizzes = await KoraInfo.findAll();
    const quizIds = quizzes.map((quiz) => quiz.quesId);
    return quizIds;
  } catch (error) {
    console.error("Error retrieving quiz IDs:", error);
    throw error;
  }
};
