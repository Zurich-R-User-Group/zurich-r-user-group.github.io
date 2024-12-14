import fs from 'node:fs';
import Papa from 'papaparse';

// Expected Type
type Event = {
  Topic: string;
  Host: string;
  Speakers: string;
  Slides: string;
  year: number;
};

const file = fs.readFileSync('./public/events.csv', 'utf8');

const parsed = Papa.parse<Event>(file, {
  delimiter: ',',
  dynamicTyping: true,
  header: true,
  skipEmptyLines: true,
});

export const { data } = parsed;
