export interface User {
  uid: string;
  displayName: string;
}

export interface Task {
  tid: string;
  name: string;
  type: string;
  details: string;
  subskills: string[];
  timeDetails: TimeDetails;
}

export enum Day {
  MONDAY    = 1,
  TUESDAY   = 1 << 1,
  WEDNESDAY = 1 << 2,
  THURSDAY  = 1 << 3,
  FRIDAY    = 1 << 4,
  SATURDAY  = 1 << 5,
  SUNDAY    = 1 << 6
}

export namespace Day {
  export const nextOccurringDay = (day: Day, days: number): Day => {
    const mask = (127 ^ (day << 1)) + 1;
    // find the LSB of days after applying mask, unless no more days in week.
    days = (mask & days) || days;
    return days & -days;
  };
}

export interface TimeDetails {
  days: number;
  startTime: number;
  endTime: number;
  recurring: boolean;
}

export interface Skill {
  name: string;
  details?: string;
  progress: number;
}

export interface MainSkill extends Skill {
  subskills: Subskill[];
}

export interface Subskill extends Skill {
  skill: MainSkill;
}

export interface AppStore {
  user: User;
  tasks: Task[];
  skills: MainSkill[];
}