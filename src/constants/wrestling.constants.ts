import type { WAge, WeightUnit, WStyle } from "@/types";

/**
 * All time values are in seconds unless otherwise noted.
 * 
 *  p1-p3: Periods 1-3 
 * 
 *  bl: Blood time 
 *  in: Injury time   
 *  hn: Head/neck injury time 
 *  rc: Recovery time
 * 
 *  sv: sudden vic
 *  tb1, tb2: tie breakers I, II
 *  utb: ultimate tie breaker
 * 
 *  sc: Shot clock duration
 *  rt: Riding time enabled (boolean - college only)
 *  twP: Time between periods
 *  twM: Time between matches
 */
interface TimersEntry {
  p1: number;
  p2: number; 
  p3?: number;
  
  bl?: number;
  in?: number;
  hn?: number;
  rc?: number;
  
  sv?: number;
  tb1?: number;
  tb2?: number;
  tbu?: number;
  
  sc?: number;
  
  rt?: boolean;
  
  twP?: number;
  twM?: number;
}

interface ClocksEntry {
  style: WStyle;
  age?: WAge;
  timers: TimersEntry;
}
export const cnsClocks: ClocksEntry[] = [
  {
    style: 'Folkstyle',
    age: 'Highschool',
    timers: {
      p1: 120, p2: 120, p3: 120,
      sv: 120, tb1: 30, tb2: 30, tbu: 30,
      bl: 300, hn: 300, in: 90, rc: 120,
      rt: false,
    },
  },
  {
    style: 'Folkstyle',
    age: 'College',
    timers: {
      p1: 180, p2: 120, p3: 120,
      sv: 120, tb1: 30, tb2: 30, tbu: 30,
      bl: 300, hn: 300, in: 90, rc: 120,
      rt: true,
    },
  },
  {
    style: 'Freestyle',
    age: undefined,
    timers: {
      p1: 180, p2: 180, 
      bl: 300, in: 120,
      rt: false, sc: 30,
    },
  },
  {
    style: 'Greco',
    age: undefined,
    timers: {
      p1: 180, p2: 180, 
      bl: 300, in: 120,
      rt: false,
    },
  },
]


interface WeightListEntry {
  age?: WAge;
  title: string;
  unit: WeightUnit;
  weights: number[];
}
export const cnsWeights = {
  Folkstyle: [
    {
      age: 'Highschool',
      title: '',
      unit: 'lbs',
      weights: [106, 113, 120, 126, 132, 138, 145, 152, 160, 170, 182, 195, 220, 285],
    },
    {
      age: 'Highschool',
      title: '',
      unit: 'lbs',
      weights: [107, 114, 121, 127, 133, 139, 145, 152, 160, 172, 189, 215, 285],
    },
    {
      age: 'College',
      title: '',
      unit: 'lbs',
      weights: [125, 133, 141, 149, 157, 165, 174, 184, 197, 285],
    },
  ] as WeightListEntry[],
  Freestyle: [
    {
      age: undefined,
      title: 'WNCAA',
      unit: 'lbs',
      weights: [101, 109, 116, 123, 130, 136, 143, 155, 170, 191],
    },
    {
      age: undefined,
      title: `Olympic Men's`,
      unit: 'kg',
      weights: [57, 65, 74, 86, 97, 125],
    },
    {
      age: undefined,
      title: `Olympic Women's`,
      unit: 'kg',
      weights: [50, 53, 57, 62, 68, 76],
    },
  ] as WeightListEntry[],
  Greco: [
    {
      age: undefined,
      title: ``,
      unit: 'kg',
      weights: [60, 67, 77, 87, 97, 130],
    },
  ] as WeightListEntry[],
};

interface WinbyEntry {
  display: string;
  value: number;
  teamPoints: number;
  selectable: boolean;
}
export const cnsWinby: WinbyEntry[] = [
  { display: 'Win By', value: 0, teamPoints: 0, selectable: true, },
  { display: 'Decision', value: 1, teamPoints: 3, selectable: true, },
  { display: 'Major Dec.', value: 1, teamPoints: 4, selectable: true, },
  { display: 'Tech Fall', value: 1, teamPoints :5, selectable: true, },
  { display: 'Pin Fall', value: 1, teamPoints: 6, selectable: true, },
  { display: 'Injury', value: 1, teamPoints :6, selectable: true, },
  { display: 'Forfeit', value: 1, teamPoints :6, selectable: true, },
  { display: 'DQ', value: 1, teamPoints: 6, selectable: true, },
];

interface PeriodEntry {
  name: string;
  decisive: boolean;
  chooseAfter: string;
  overtime?: boolean;
  restAfter?: boolean;
}
export const cnsPeriods = {
  Folkstyle: [
    { name: 'Period 1', decisive: false, chooseAfter: 'both', },
    { name: 'Period 2', decisive: false, chooseAfter: 'notprevious', },
    { name: 'Period 3', decisive: true, chooseAfter: 'none', },

    { name: 'Sudden Victory', decisive: true, chooseAfter: 'both', overtime: true, }, // folkstyle college periods 4-6 can repeat 
    { name: 'Tie Breaker I', decisive: false, chooseAfter: 'notprevious', overtime: true, },
    { name: 'Tie Breaker II', decisive: true, chooseAfter: 'firstblood', overtime: true, },
    
    { name: 'Ultimate Tie Breaker', decisive: true, chooseAfter: 'none', }, // only for high school
  ] as PeriodEntry[],

  Freestyle: [
    { name: 'Period 1', decisive: false, chooseAfter: 'none', restAfter: true, },
    { name: 'Period 2', decisive: true, chooseAfter: 'none', },
  ] as PeriodEntry[],
  Greco: [
    { name: 'Period 1', decisive: false, chooseAfter: 'none', restAfter: true, },
    { name: 'Period 2', decisive: true, chooseAfter: 'none', },
  ] as PeriodEntry[],
};

interface ThresholdEntry {
  techfall: number;
  major: number;
  decision: number;
}
export const cnsThresholds = {
  Folkstyle: { techfall: 15, major: 8, decision: 1 } as ThresholdEntry,
  Freestyle: { techfall: 10, major: 8, decision: 1 } as ThresholdEntry,
  Greco: { techfall: 10, major: 8, decision: 1 } as ThresholdEntry,
};
