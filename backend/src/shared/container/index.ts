import { container } from "tsyringe";
import { DtRepository } from "../../Repositories/DtRepository";
import { IDtRepository } from "../../Repositories/IDtRepository";

container.registerSingleton<IDtRepository>(
    "DtRepository",
    DtRepository
);