/**
 * General
 */
export type WeightUnit = 'lbs' | 'kg';


export type PreciseClock = {};

/**
 * Wrestling
 */

// simple types
export type WStyle = 'Folkstyle'
  | 'Freestyle'
  | 'Greco';

export type WAge = 'Highschool' | 'College';
export type WSide = 'l' | 'r';
export type WPos = 't' | 'n' | 'b';


// standard types
export type WPosChoice = {
  periodIdx: number;
  side: WSide;
  choice: WPos | 'defer';
}

export type WMatch = {
  weight: number;
  ptLeft: number;
  ptRight: number;
  teamPtLeft: number;
  teamPtRight: number;
  winner: string; // ?
  winbyIdx: number; 
  totalElapsedSeconds: number;
  winPeriod: number;
}

export type WStateSide = {
  showChoosePos: boolean;
  pos: WPos;
  teamName: string;
  teamNameAbbr: string;
  athleteName?: string;
  winbyIdx: number;
  clocks: {
    blood: PreciseClock;
    injury: PreciseClock;
    recovery: PreciseClock;
    headneck: PreciseClock;
  }
}

export type WHistory = {
  matches: WMatch;
}

