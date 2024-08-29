interface DepartmentMap {
  [key: string]: string[];
}

// index.ts
export const faculties = [
  '인문대학',
  '자연과학대학',
  '법과대학',
  '사회과학대학',
  '경제통상대학',
  '경영대학',
  '공과대학',
  'IT대학',
  '융합특성화자유전공학부',
  '차세대반도체학과',
];

export const departments: DepartmentMap = {
  인문대학: [
    '인문대학',
    '기독교학과',
    '국어국문학과',
    '영어영문학과',
    '독어독문학과',
    '불어불문학과',
    '중어중문학과',
    '일어일문학과',
    '철학과',
    '사학과',
    '문예창작전공',
    '영화예술전공',
    '스포츠학부',
  ],
  자연과학대학: ['자연과학대학', '수학과', '물리학과', '화학과', '의생명시스템학부', '정보통계 보험수리학과'],
  법과대학: ['법과대학', '법학과', '국제법무학과'],
  사회과학대학: [
    '사회과학대학',
    '사회복지학부',
    '행정학부',
    '정치외교학과',
    '정보사회학과',
    '언론홍보학과',
    '평생교육학과',
  ],
  경제통상대학: ['경제통상대학', '경제학과', '글로벌통상학과', '금융경제학과', '국제무역학과', '통상산업학과'],
  경영대학: [
    '경영대학',
    '경영학부',
    '벤처중소기업학과',
    '회계학과',
    '금융학부',
    '벤처경영학과',
    '혁신경영학과',
    '복지경영학과',
    '회계세무학과',
  ],
  공과대학: ['공과대학', '화학공학과', '신소재공학과', '전기공학부', '기계공학부', '산업정보시스템공학과', '건축학부'],
  IT대학: [
    'IT대학',
    '글로벌미디어학부',
    '컴퓨터학부',
    '소프트웨어학부',
    '전자정보공학부',
    'AI융합학부',
    '미디어경영학과',
    '정보보호학과',
  ],
  융합특성화자유전공학부: ['융합특성화자유전공학부'],
};

interface UserCategories {
  [key: string]: string[];
}

export const userCategories: UserCategories = {
  ssuoperating1897: [
    '학생총회 결과보고',
    '전체학생대표자회의 결과보고',
    '확대운영위원회 결과보고',
    '중앙운영위원회 회의록',
    '총학생회칙',
    '특별기구 운영세칙',
  ],
  ssutudent1897: ['결산안', '활동보고'],
  ssuwelfare: ['학생복지위원회'],
  ssuright: ['인권위원회'],
  ssumagazine: ['교지편집위원회'],
  ssuitsupport: ['IT지원위원회'],

  ssuvote1897: ['선거시행세칙', '선거세부지침서', '특별선거시행세칙'],
  ssuvotebusiness: ['선거시행세칙', '선거세부지침서', '특별선거시행세칙'],
  ssuvoteecontrade: ['선거시행세칙', '선거세부지침서', '특별선거시행세칙'],
  ssuvotenatural: ['선거시행세칙', '선거세부지침서', '특별선거시행세칙'],
  ssuvoteengineering: ['선거시행세칙', '선거세부지침서', '특별선거시행세칙'],
  ssuvotelaw: ['선거시행세칙', '선거세부지침서', '특별선거시행세칙'],
  ssuvotesocialsciences: ['선거시행세칙', '선거세부지침서', '특별선거시행세칙'],
  ssuvotehumanities: ['선거시행세칙', '선거세부지침서', '특별선거시행세칙'],
  ssuvoteit: ['선거시행세칙', '선거세부지침서', '특별선거시행세칙'],
  ssuvotessudy: ['선거시행세칙', '선거세부지침서', '특별선거시행세칙'],

  ssuaudit1897: ['회계교육자료', '감사시행세칙', '회계지침서', '감사결과보고서', '회의록'],
  ssuauditbusiness: ['감사시행세칙', '회계지침서', '감사결과보고서', '회의록'],
  ssuauditecontrade: ['감사시행세칙', '회계지침서', '감사결과보고서', '회의록'],
  ssuauditengineering: ['감사시행세칙', '회계지침서', '감사결과보고서', '회의록'],
  ssuauditlaw: ['감사시행세칙', '회계지침서', '감사결과보고서', '회의록'],
  ssuauditsocialsciences: ['감사시행세칙', '회계지침서', '감사결과보고서', '회의록'],
  ssuaudithumanities: ['감사시행세칙', '회계지침서', '감사결과보고서', '회의록'],
  ssuauditnatural: ['감사시행세칙', '회계지침서', '감사결과보고서', '회의록'],
  ssuauditit: ['감사시행세칙', '회계지침서', '감사결과보고서', '회의록'],

  ssubusiness1897: ['회칙·세칙', '회의록', '예·결산안', '활동보고', '대표자회의 결과보고'],
  ssuengineering1897: ['회칙·세칙', '회의록', '예·결산안', '활동보고', '대표자회의 결과보고'],
  ssucollegeoflaw1897: ['회칙·세칙', '회의록', '예·결산안', '활동보고', '대표자회의 결과보고'],
  ssusocialsci1897: ['회칙·세칙', '회의록', '예·결산안', '활동보고', '대표자회의 결과보고'],
  ssuhumanities1897: ['회칙·세칙', '회의록', '예·결산안', '활동보고', '대표자회의 결과보고'],
  ssunature1897: ['회칙·세칙', '회의록', '예·결산안', '활동보고', '대표자회의 결과보고'],
  ssuit1897: ['회칙·세칙', '회의록', '예·결산안', '활동보고', '대표자회의 결과보고'],
  ssuecontrade1897: ['회칙·세칙', '회의록', '예·결산안', '활동보고', '대표자회의 결과보고'],
  ssuconvergence1897: ['회칙·세칙', '회의록', '예·결산안', '활동보고', '대표자회의 결과보고'],

  ssubiz: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssuaccounting: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssuventure: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssufiance: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssueco: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssuitrade: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssufeco: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssuitrans: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssuchemical: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssumaterials: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssuelectrical: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssume: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssuinsteng: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssuarchitec: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssulaw: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssuila: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssusocial: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssupubad: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssupolitics: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssuinso: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssumasscom: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssulifelongedussuenchristo: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssukorlan: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssuenglan: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssugerlan: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssufrance: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssuchilan: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssujapanstu: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssuphilosophy: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssuhistory: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssuwriting: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssussfilm: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssusport: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssumath: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssuphysics: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssuchem: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssustat: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssubioinfo: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssucse: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssuinforcom: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssuglobalmedia: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssusw: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssusmartsystem: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
  ssumediamba: ['회칙·세칙', '회의록', '예·결산안', '활동보고'],
};
