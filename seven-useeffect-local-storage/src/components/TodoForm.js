import React, {useState} from 'react'
import {
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    Button,
    Form
} from 'reactstrap'
import {v4} from 'uuid'

const TodoForm = ({addTodos}) => {

    const [todoString, setTodostring] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        if(todoString === ""){
            return alert("Please fill todo")
        }
        const todo = {
            todoString,
            id: v4()
        }

        addTodos(todo)

        setTodostring("")
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                <Input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Your next Todo"
                    value={todoString}
                    onChange={e => setTodostring(e.target.value)}
                />
                    <InputGroupAddon addonType="prepend">
                        <Button
                            color="success"
                        > Add Todo</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;