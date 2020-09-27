export interface TaskEntity {
  id: number;
  creator: string;
  owner: string;
  assignee: string;
  parent_id: string;
  start_dt: Date;
  due_dt: Date;
  reminder_dt: Date;
  status: Status;
  attr: {
    title: string;
    description: string;
    body: string;
    label: string[];
    priority: Priority;
    points: number;
    type: string;
    shift_id: number;
    rollover: number;

  };
}
export type Priority = 'High' | 'Medium' | 'Low';
export type Status = 'Done' | 'Pending' | 'Dismissed';
