import type { ZonkClock } from "@/lib/ZonkClock";

/**
 * ----------------------- General -----------------------
 */
export type WeightUnit = 'lbs' | 'kg';



/**
 * ----------------------- Clocks -----------------------
 */
export type ClockEvent = 'start' | 'stop' | 'reset' | 'complete';




/**
 * ----------------------- Wrestling -----------------------
 */

export type WStyle = 'Folkstyle'
  | 'Freestyle'
  | 'Greco';

export type WAge = 'Highschool' | 'College';
export type WSide = 'l' | 'r';
export type WPos = 't' | 'n' | 'b';



export type WConfig = {
  style: WStyle;
  age: WAge;
  periodLength: number; // seconds
  team: boolean;
}

export type WPosChoice = {
  periodIdx: number;
  side: WSide;
  choice: WPos | 'defer';
}

export type WAction = {
  clock?: {
    side: WSide | undefined;
    clockId: string;
    event: ClockEvent;
    timeLeft: number; // ms
  }

  wrestle?: {
    action: string;
    actionTitle: string;

    clean: boolean;
    
    pt: number;
    oppPt: number;

    dq: boolean;
    cnt: number; // count - might replace this with dynamic count
  }

  ts: number; // Date.now()
  elapsed: number; // seconds into current period
}

export type WPeriod = {
  title: string;
  displayIdx: number; // used for display purposes
  realIdx: number; // true index
  actions: WAction[];
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
    blood?: ZonkClock;
    injury?: ZonkClock;
    recovery?: ZonkClock;
    headneck?: ZonkClock;
  }
}

export type WHistory = {
  matches: WMatch;
}

export type WStateMain = {
  activeClockId: string;
  lastActivatedClockId: string;
  lastActivatedClockAction: string;

  config: WConfig;
  clocks: {
    mc: ZonkClock;
    rest?: ZonkClock;
    shotclock?: ZonkClock;
    ride?: ZonkClock;
  };
  
  defer: string;
  l: WStateSide;
  r: WStateSide;
}

