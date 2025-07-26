export enum TodoStatus {
  NotStarted,
  InProgress,
  Done,
}
export type Todo = {
  title: string;
  status: TodoStatus;
};
