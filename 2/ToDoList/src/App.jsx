// src/App.jsx
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addToDo = () => {
    if (text.trim().length === 0) {
      alert("할 일을 입력해주세요");
      return;
    }
    setTodos((prev) => [
      ...prev, 
      { id: Math.floor(Math.random() * 100) + 2, task: text }
    ]);
    setText('');
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const updateTodo = (id, text) => {
    setTodos((prev) => 
      prev.map((item) => item.id === id ? { ...item, task: text } : item)
    );
    setEditingId('');
  };

  return (
    <div className="app">
      <h1>Todo list</h1>
      <form onSubmit={handleSubmit} className="todo-form">
        <Input 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="할 일을 입력해주세요" 
        />
        <Button onClick={addToDo} label="할 일 등록" type="submit" className="add-button" />
      </form>
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            {editingId !== todo.id ? (
              <div className="todo-content">
                <p>{todo.task}</p>
              </div>
            ) : (
              <div className="todo-editing">
                <Input 
                  defaultValue={todo.task} 
                  onChange={(e) => setEditText(e.target.value)} 
                />
              </div>
            )}
            <div className="todo-actions">
              <Button 
                onClick={() => deleteTodo(todo.id)} 
                label="삭제" 
                className="delete-button" 
              />
              {editingId === todo.id ? (
                <Button 
                  onClick={() => updateTodo(editingId, editText)} 
                  label="완료" 
                  className="edit-button" 
                />
              ) : (
                <Button 
                  onClick={() => setEditingId(todo.id)} 
                  label="수정" 
                  className="edit-button" 
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
