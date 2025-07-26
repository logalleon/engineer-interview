export enum TodoStatus {
  NotStarted,
  InProgress,
  Done,
}
export type Todos = {
  id: string;
  title: string;
  content: string;
  status: TodoStatus;
};
