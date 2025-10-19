import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";

function getMonthlyData(pivotDate, data) {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  );
}

export default function Home() {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = getMonthlyData(pivotDate, data);

  function onIncreaseMonth() {
    setPivotDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));
  }

  function onDecreaseMonth() {
    setPivotDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));
  }
  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
}
