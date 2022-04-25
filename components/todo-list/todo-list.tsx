import { useState, useRef } from "react"
import { Box, Fade, List, Text, Divider } from "@chakra-ui/react"
import { ITodo } from "../../util/types"
import Todo from "./todo"
import Footer from "./footer"
import TodoForm from "./todo-form"
import SubForm from "./sub-form"
import styled from "@emotion/styled"

const TimerBox = styled.span`
  font-family: Lato;
  font-size: 28px;
  font-weight: bold;
  line-height: 15px;
`

const TodoList = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [subFormOpen, setSubFormOpen] = useState<boolean>(false)
  const [subFormPosition, setSubFormPosition] = useState<string>("")
  const subFormIndent = useRef<number>(0);

  const findPos = (id: string): number => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        return i
      }
    }
    return todos.length
  }

  const removeAllTodos = () => {
    setTodos([]);
  }

  const openSubForm = (id: string) => {
    if (id === subFormPosition && subFormOpen) {
      setSubFormOpen(false)
    } else {
      setSubFormOpen(true)
      const start = findPos(id)
      const indent = todos[start].indent
      subFormIndent.current = indent + 1
      console.log(subFormIndent.current)
      setSubFormPosition(id)
      for (let i = start + 1; i < todos.length; i++) {
        if (todos[i].indent > indent) {
          setSubFormPosition(todos[i].id)
        }
      }
    }
  }

  const addTodo = (todo: ITodo, id: string) => {
    const pos = findPos(id) + 1
    const before: ITodo[] = todos.slice(0, pos)
    const after: ITodo[] = todos.slice(pos, todos.length)
    setTodos([...before, todo, ...after])
  }

  const removeTodo = (id: string) => {
    let start = findPos(id)
    let end = start
    const indent = todos[start].indent
    for (let i = start + 1; i < todos.length; i++) {
      if (todos[i].indent <= indent) {
        end = i - 1
        break
      }
    }
    setTodos(todos.filter((_, index) => index < start || index > end))
  }

  const toggleCompleted = (id: string) => {
    const newTodos: ITodo[] = todos.map((todo: ITodo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      } else {
        return todo
      }
    })
    setTodos(newTodos)
  }

  console.log(subFormIndent.current)

  return (
    <Box mt={8}>
      <Box mb={5}>
        <TimerBox>
          <Text>Todo List</Text>
        </TimerBox>
      </Box>
      <Divider />
      <List mt={todos.length > 0 ? 2 : 0}>
        {todos.map((todo: ITodo) => (
          <Fade key={todo.id} in={true} unmountOnExit={true}>
            <Todo
              todo={todo}
              removeTodo={removeTodo}
              toggleCompleted={toggleCompleted}
              openSubForm={openSubForm}
            />
            {(subFormOpen && subFormPosition === todo.id) ? (
              <Fade in={true}>
                <Box ml={subFormIndent.current * 8}>
                  <SubForm
                    addTodo={addTodo}
                    indent={subFormIndent.current}
                    prevId={todo.id}
                    setSubForm={() => setSubFormOpen(false)}
                  />
                </Box>
              </Fade>
            ) : null}
          </Fade>
        ))}
      </List>
      <TodoForm addTodo={addTodo} todoPos={todos.length} />
      <Divider />
      <Footer numTodos={todos.length} removeAllTodos={removeAllTodos} />
    </Box >
  )
}

export default TodoList
