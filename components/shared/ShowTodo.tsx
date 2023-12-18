"use client";

import { useState, useEffect } from "react";
import { prisma } from "@/utils/prisma";
import { hideCompletedTodos } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";

const ShowTodo = ({ onToggleCompleted }) => {
  const [isChecked, setIsChecked] = useState(false); // 儲存按鈕狀態

  const handleClick = () => {
    setIsChecked(!isChecked); // 切換狀態
    onToggleCompleted(!isChecked); // 呼叫父組件函數，傳入更新的狀態
  };

  return (
    <button
      type="button"
      className="shadow-md rounded-full px-4 py-2 flex items-center justify-center"
      onClick={handleClick}
    >
      {isChecked ? (
        <>
          <AiOutlineCheck className="text-xl mr-2" /> 已完成
        </>
      ) : (
        <>
          <AiOutlineClose className="text-xl mr-2" /> 未完成
        </>
      )}
    </button>
  );
};

export default ShowTodo;
