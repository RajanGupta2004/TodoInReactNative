import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import InputComponents from './src/components/InputComponents';
import TodoList from './src/components/TodoList';
import {Todo} from './src/types';

function App(): React.JSX.Element {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodoText = (text: string) => {
    const todo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTodoList([...todoList, todo]);
  };

  const deleteTodo = (id: string) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  const todoCompleted = (id: string) => {
    const updateTodo = todoList.map(todo => {
      if (todo.id == id) {
        return {...todo, completed: !todo.completed};
      }
      return todo;
    });

    setTodoList(updateTodo);
  };

  const editTodo = (todo: Todo) => {};

  // console.log(todoList);
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Todo App</Text>
      <InputComponents onAddTodo={addTodoText} />
      <TodoList
        todoList={todoList}
        deleteTodo={deleteTodo}
        todoCompleted={todoCompleted}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 500,
    color: '#333',
    textAlign: 'center',
  },
});

export default App;
