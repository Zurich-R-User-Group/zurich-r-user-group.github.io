import fs from 'node:fs';
import Papa from 'papaparse';

// Expected Type
type Event = {
  Topic: string;
  Host: string;
  Speakers: string;
  Slides: string;
};

const file = fs.readFileSync('./public/events.csv', 'utf8');

const parsed = Papa.parse<Event>(file, {
  delimiter: ',',
  dynamicTyping: true,
  header: true,
  skipEmptyLines: true,
});

export const { data } = parsed;

console.log(data.length); 
console.log(data[0]?.['Host']); 
console.log(data[0]?.['Speakers']); 
console.log(typeof data[1]?.Speakers); 