import {Router} from "expres";
import { createProject, deleteProject, getProject, getPublicProject, listProjects, publishProject, updateProjectFiles } from "../controllers/ProjectController";
import { chat } from "../controllers/ChatController";


const projectRouter = Router();

// public Route
projectRouter.get("/public/:id", getPublicProject)

// project all following routes
projectRouter.use(authMiddleware)


projectRouter.post("/", createProject)
projectRouter.get("/", listProjects)
projectRouter.get("/:id", getProject)
projectRouter.delete("/:id", deleteProject)
projectRouter.put("/:id/files", updateProjectFiles)
projectRouter.post("/:id/publish", publishProject)


// Chat 
projectRouter.post("/:id/chat", chat);



export default projectRouter;
