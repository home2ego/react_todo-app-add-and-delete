// #region imports
import { Todo } from '../types/Todo';
import TodoItem from './TodoItem';
// #endregion

// #region type Props
type Props = {
  filteredTodos: Todo[];
  tempTodo: Todo | null;
  onDelete: (todoId: number[]) => void;
  isLoading: boolean;
  loadingTodoIds: number[];
};
// #endregion

export default function TodoList({
  filteredTodos,
  onDelete,
  tempTodo,
  isLoading,
  loadingTodoIds,
}: Props) {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          isLoading={loadingTodoIds.includes(todo.id)}
        />
      ))}

      {tempTodo && <TodoItem todo={tempTodo} isLoading={isLoading} />}
    </section>
  );
}
