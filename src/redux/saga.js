import { put, takeLatest } from "redux-saga/effects";
import { addTodo } from "./todosSlice";

let count = 1;
let task = "";

export function* showSuccess(payload) {
    if (payload.payload.task !== task && payload.payload.task !== "Gift task by Saga!") {
        count = 0;
        task = payload.payload.task;
    }
    if (count === 0) {
        count++;
        //yield alert(payload.payload.task + " added!, another task will be dadded by Saga");
        yield put(addTodo({ task: "Gift task by Saga!" }));
    }
}

// Generator function
export function* watchAddTodo() {
    yield takeLatest(addTodo, showSuccess);
}