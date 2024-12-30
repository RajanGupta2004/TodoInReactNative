import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Todo} from '../types';

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: string) => void;
  todoCompleted: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  deleteTodo,
  todoCompleted,
}) => {
  console.log(todo, 'todo item');

  return (
    <View style={styles.container}>
      <Text
        onPress={() => todoCompleted(todo.id)}
        style={[styles.todoText, todo.completed && styles.completedTest]}>
        {todo.text}
      </Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText} onPress={() => deleteTodo(todo.id)}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#b2ebf2',
  },
  todoText: {
    flex: 2,
    fontSize: 16,
    color: '#00796b',
  },
  btnContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
  btn: {
    padding: 8,
    backgroundColor: '#00796b',
    borderRadius: 5,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 14,
  },
  completedTest: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default TodoItem;
