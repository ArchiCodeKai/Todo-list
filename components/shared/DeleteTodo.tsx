"use client";

import { deleteTodo } from "@/app/actions/todoActions";
import Button from "../ui/Button";
import { PiTrash } from "react-icons/pi";
import Form from "../ui/Form";
import { todoType } from "@/types/todoTypes";

const DeleteTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={deleteTodo}>
      <input type="hidden" name="inputId" value={todo.id} />
      <Button actionButton text={<PiTrash />} type="submit" />
    </Form>
  );
};

export default DeleteTodo;
