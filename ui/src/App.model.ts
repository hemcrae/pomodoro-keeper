export interface MongoEntry {
  _id: string;
  name: string;
  startTime: string;
  endTime: string;
}

export interface FormattedEntry {
  id: string;
  name: string;
  formattedStartTime: string;
  formattedEndTime: string;
  formattedTotal: string;
}

export interface FormattedEntriesObject {
  total: number;
  entries: FormattedEntry[];
  day?: string;
}

export interface Timer {
  id: string | null;
  pomodoro: boolean;
  taskName: string;
  startTime?: string;
  endTime?: string;
}

export interface GroupedEntries {
  [day: string]: MongoEntry[];
}

export interface TotalObject {
  [day: string]: number;
}
