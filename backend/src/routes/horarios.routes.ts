import { Router } from 'express';
import { getHorarios, getHorarioById, createHorario, updateHorario, deleteHorario } from '../controllers/horarios.controller';
import { validateSchema } from '../middlewares/validate.middleware';
import { createHorarioSchema, updateHorarioSchema } from '../schemas/horario.schema';

const router = Router();

router.get('/', getHorarios);
router.get('/:id', getHorarioById);
router.post('/', validateSchema(createHorarioSchema), createHorario);
router.put('/:id', validateSchema(updateHorarioSchema), updateHorario);
router.delete('/:id', deleteHorario);

export default router;
