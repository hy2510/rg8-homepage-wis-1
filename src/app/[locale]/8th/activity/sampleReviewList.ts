// 리뷰 책 데이터 타입 정의
export interface ReviewBook {
  title: string
  coverImage: string
  totalScore: number
  stepScores: number[]
  passMark: 'PASS' | 'FAIL'
  passCount: number
  studyDate: string
}

// 샘플 리뷰 책 데이터
export const reviewBooks: ReviewBook[] = [
  {
    title: "Aligator's Apples",
    coverImage:
      'https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-ka-001.jpg',
    totalScore: 100,
    stepScores: [100, 100, 100, 100, 100],
    passMark: 'PASS',
    passCount: 1,
    studyDate: '2024-10-11',
  },
  {
    title: "Aligator's Apples",
    coverImage:
      'https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-ka-002.jpg',
    totalScore: 60,
    stepScores: [60, 60, 60, 60, 60],
    passMark: 'FAIL',
    passCount: 2,
    studyDate: '2024-10-11',
  },
  {
    title: "Aligator's Apples",
    coverImage:
      'https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-ka-003.jpg',
    totalScore: 100,
    stepScores: [100, 100, 100, 100, 100],
    passMark: 'PASS',
    passCount: 3,
    studyDate: '2024-10-11',
  },
]
