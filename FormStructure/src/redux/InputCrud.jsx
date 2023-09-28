import { PostMethodExecutor } from "./Executor";

export const PostInput = obj => {
    return PostMethodExecutor(`http://localhost:3000/inputs`, obj);
  };
