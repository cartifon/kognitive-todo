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
    body: string;
    label: string[];
    priority: Priority;
    points: number;
    type: string;
    shift_id: number;
    rollover: number;

  };
}
export type Priority = 'High' | 'Low';
export type Status = 'Done' | 'Pending';
