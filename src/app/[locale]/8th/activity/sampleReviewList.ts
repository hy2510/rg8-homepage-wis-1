// 리뷰 책 데이터 타입 정의
export interface ReviewBook {
  title: string
  coverImage: string
  totalScore: number
  stepScores: number[]
  passMark: 'PASS' | 'FAIL'
  passCount: number
  studyDate: string
  earnPoints: number
}

// 샘플 리뷰 책 데이터
export const reviewBooks: ReviewBook[] = [
  {
    title: 'Bangkok, the City of Angels',
    coverImage:
      'https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-2a-007.jpg',
    totalScore: 60,
    stepScores: [60, 60, 60, 60, 60],
    passMark: 'FAIL',
    passCount: 2,
    earnPoints: 0,
    studyDate: '2024-10-11',
  },
  {
    title: 'Paris, the City of Love',
    coverImage:
      'https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-2a-008.jpg',
    totalScore: 100,
    stepScores: [100, 100, 100, 100, 100],
    passMark: 'PASS',
    passCount: 3,
    earnPoints: 1.2,
    studyDate: '2024-10-12',
  },
  {
    title: 'Tokyo, a Mix of Old and New',
    coverImage:
      'https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-2a-009.jpg',
    totalScore: 100,
    stepScores: [100, 100, 100, 100, 100],
    passMark: 'PASS',
    passCount: 3,
    earnPoints: 1.2,
    studyDate: '2024-10-12',
  },
]

export const reviewAllBooks: ReviewBook[] = [
  {
    title: 'The Ultimate Bug Battle',
    coverImage:
      'https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-2a-571.jpg',
    totalScore: 80,
    stepScores: [80, 80, 80, 80, 80],
    passMark: 'PASS',
    passCount: 1,
    earnPoints: 1.2,
    studyDate: '2024-10-10',
  },
  {
    title: 'New York, the Big Apple',
    coverImage:
      'https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-2a-001.jpg',
    totalScore: 60,
    stepScores: [60, 60, 60, 60, 60],
    passMark: 'FAIL',
    passCount: 0,
    earnPoints: 0,
    studyDate: '2024-10-10',
  },
  {
    title: 'A Tour of London',
    coverImage:
      'https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-2a-002.jpg',
    totalScore: 100,
    stepScores: [100, 100, 100, 100, 100],
    passMark: 'PASS',
    passCount: 3,
    earnPoints: 0,
    studyDate: '2024-10-11',
  },
  {
    title: 'Venice, the City of Water',
    coverImage:
      'https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-2a-003.jpg',
    totalScore: 100,
    stepScores: [100, 100, 100, 100, 100],
    passMark: 'PASS',
    passCount: 1,
    earnPoints: 1.2,
    studyDate: '2024-10-11',
  },
  {
    title: 'Busy Beijing',
    coverImage:
      'https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-2a-004.jpg',
    totalScore: 60,
    stepScores: [60, 60, 60, 60, 60],
    passMark: 'FAIL',
    passCount: 1,
    earnPoints: 0,
    studyDate: '2024-10-11',
  },
  {
    title: 'Dubai, the Desert Playground',
    coverImage:
      'https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-2a-005.jpg',
    totalScore: 100,
    stepScores: [100, 100, 100, 100, 100],
    passMark: 'PASS',
    passCount: 3,
    earnPoints: 1.2,
    studyDate: '2024-10-11',
  },
  {
    title: 'A Vacation in Sydney',
    coverImage:
      'https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-2a-006.jpg',
    totalScore: 100,
    stepScores: [100, 100, 100, 100, 100],
    passMark: 'PASS',
    passCount: 1,
    earnPoints: 1.2,
    studyDate: '2024-10-11',
  },
  {
    title: 'Bangkok, the City of Angels',
    coverImage:
      'https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-2a-007.jpg',
    totalScore: 60,
    stepScores: [60, 60, 60, 60, 60],
    passMark: 'FAIL',
    passCount: 2,
    earnPoints: 0,
    studyDate: '2024-10-11',
  },
  {
    title: 'Paris, the City of Love',
    coverImage:
      'https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-2a-008.jpg',
    totalScore: 100,
    stepScores: [100, 100, 100, 100, 100],
    passMark: 'PASS',
    passCount: 3,
    earnPoints: 1.2,
    studyDate: '2024-10-12',
  },
  {
    title: 'Tokyo, a Mix of Old and New',
    coverImage:
      'https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-2a-009.jpg',
    totalScore: 100,
    stepScores: [100, 100, 100, 100, 100],
    passMark: 'PASS',
    passCount: 3,
    earnPoints: 1.2,
    studyDate: '2024-10-12',
  },
]
