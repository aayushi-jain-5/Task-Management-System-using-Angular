// store.ts
export class Store {
    private data: any = {};
  
    constructor() {}
  
    set(key: string, value: any): void {
      this.data[key] = value;
    }
  
    get(key: string): any {
      return this.data[key];
    }
  
    remove(key: string): void {
      delete this.data[key];
    }
  
    clear(): void {
      this.data = {};
    }
  }