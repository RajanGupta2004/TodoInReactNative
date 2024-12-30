import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Todo} from '../types/index';
import TodoItem from './TodoItem';

interface TodoListProps {
  todoList: Todo[];
  deleteTodo: (id: string) => void;
  todoCompleted: (id: string) => void;
}
const TodoList: React.FC<TodoListProps> = ({
  todoList,
  deleteTodo,
  todoCompleted,
}) => {
  return (
    <ScrollView contentContainerStyle={{padding: 4}} style={styles.container}>
      {todoList?.map(todo => (
        <View key={todo.id}>
          <TodoItem
            todo={todo}
            deleteTodo={deleteTodo}
            todoCompleted={todoCompleted}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
});

export default TodoList;
