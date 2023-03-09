export interface Message {
  message: string;
}

export interface BaseEntity {
  id: string | null;
}

export interface Ticket extends BaseEntity {
  title: string;
  description: string;  
}