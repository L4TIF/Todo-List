
import { createProject } from "./createProject";
import { modifyTitle } from "./modifyTodo";
import "./styles.css";

const travel = createProject("travelling");
travel.createTodo("india", "lorem2", new Date(), "High", "none", false);
travel.createTodo("india223", "lorem2", new Date(), "High", "none", false);

