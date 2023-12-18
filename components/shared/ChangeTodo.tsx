import Form from "../ui/Form";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { todoStatus } from "@/app/actions/todoActions";
import { todoType } from "@/types/todoTypes";

const ChangeTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={todoStatus}>
      <Input name="inputId" value={todo.id} type="hidden" />{" "}
      <Button
        actionButton
        type="submit"
        text={<AiOutlineCheckCircle className="hover:bg-orange-500" />}
      />
    </Form>
  );
};

export default ChangeTodo;
