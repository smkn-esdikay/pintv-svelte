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

export type WPeriod = {
  title: string;
  displayIdx: number; // used for display purposes
  realIdx: number; // true index
  actions: [];
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
  periods: WPeriod[];
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

export type WStateMain = {
  activeClockId: string;
  lastActivatedClockId: string;
  lastActivatedClockAction: string;

  init: {

  },
  clocks: {
    mc: PreciseClock,
    rest?: PreciseClock,
    shotclock?: PreciseClock,
    ride: PreciseClock,
  },
  
  defer: string;
  l: WStateSide;
  r: WStateSide;
}

