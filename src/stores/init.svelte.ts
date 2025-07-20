import type { WAge, WStyle } from "@/types";

interface InitData {
  style: WStyle;
  age: WAge;
  periodLength: number; // seconds
  team: boolean;
}
const ur: InitData = {
  style: 'Folkstyle',
  age: 'Highschool',
  periodLength: 120,
  team: false,
};

class InitStore {
  private data = $state<InitData>({...ur});

  get style() { return this.data.style; }
  get age() { return this.data.age; }
  get periodLength() { return this.data.periodLength; }
  get team() { return this.data.team; }

  /**
   * @param {InitData} newData - set the init data
   */
  setAll(newData: InitData) { this.data = newData }
}

export const initStore = new InitStore();
