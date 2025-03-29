
export type Item = {
  name: string;
  id: string;
  days: string[];
  time: {start: string, end: string}
  color: string,
};

export type Schedule = {
  name: string, 
  color?: string,
  date: string,
  time: {
    start: string, 
    end: string,
  }
}