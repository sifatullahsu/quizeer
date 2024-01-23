/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export function getRandom(list: any[] | undefined) {
  if (!list) return list

  return list[Math.floor(Math.random() * list.length)]
}

export function formatDateTime(isoDateTimeString: Date) {
  const dateTime = new Date(isoDateTimeString)

  // Extracting components
  const year = dateTime.getFullYear()
  const month = dateTime.getMonth() + 1 // Months are zero-based, so adding 1
  const day = dateTime.getDate()
  let hours = dateTime.getHours()
  const minutes = dateTime.getMinutes()

  // Determine AM or PM
  const amPM = hours >= 12 ? 'PM' : 'AM'

  // Convert to 12-hour format
  hours = hours % 12 || 12

  // Formatting the date and time with AM/PM
  const formattedDateTime = `${year}-${month.toString().padStart(2, '0')}-${day
    .toString()
    .padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${amPM}`

  return formattedDateTime
}

export function removeTimestamps(quizData: any) {
  const { createdAt, updatedAt, ...dataWithoutTimestamps } = quizData

  function removeTimestampsFromOptions(options: any) {
    return options.map((option: any) => {
      const { createdAt, updatedAt, ...optionWithoutTimestamps } = option
      return optionWithoutTimestamps
    })
  }

  function removeTimestampsFromQuestions(questions: any): any {
    return questions.map((question: any) => {
      const { createdAt, updatedAt, ...questionWithoutTimestamps } = question
      questionWithoutTimestamps.options = removeTimestampsFromOptions(question.options)
      return questionWithoutTimestamps
    })
  }

  dataWithoutTimestamps.questions = removeTimestampsFromQuestions(dataWithoutTimestamps.questions)

  return dataWithoutTimestamps
}
