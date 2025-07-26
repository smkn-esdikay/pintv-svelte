import type { WConfig } from "@/types";


const ur: WConfig = {
  style: 'Folkstyle',
  age: 'Highschool',
  periodLength: 120,
  team: false,
};

class InitStore {
  private data = $state<WConfig>({...ur});

  get style() { return this.data.style; }
  get age() { return this.data.age; }
  get periodLength() { return this.data.periodLength; }
  get team() { return this.data.team; }

  /**
   * @param {WConfig} newData - set the init data
   */
  setAll(newData: WConfig) { this.data = newData }
}

export const initStore = new InitStore();
