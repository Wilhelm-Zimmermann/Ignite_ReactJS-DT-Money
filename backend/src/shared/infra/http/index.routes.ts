import { Router } from "express";
import { DtController } from "../../../Controllers/DtController";

const router = Router();
const dtController = new DtController();

router.post("/create-dt", dtController.create);
router.get("/get-dt", dtController.findAll);

export { router }