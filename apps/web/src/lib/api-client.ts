import { treaty } from "@elysiajs/eden";
import type { ElysiaServer } from "../../../../types/types";
const apiClient = treaty<ElysiaServer>("http://localhost:3000");
export default apiClient;
