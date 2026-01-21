
export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

export interface AgendaItem {
  day: number;
  time: string;
  title: string;
  description: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  isPrimary?: boolean;
}
