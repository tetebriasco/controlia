import { Router } from 'express';
import { getEmpleados, getEmpleadoById, createEmpleado, updateEmpleado, deleteEmpleado } from '../controllers/empleados.controller';
import { validateSchema } from '../middlewares/validate.middleware';
import { createEmpleadoSchema, updateEmpleadoSchema } from '../schemas/empleado.schema';

const router = Router();

router.get('/', getEmpleados);
router.get('/:id', getEmpleadoById);
router.post('/', validateSchema(createEmpleadoSchema), createEmpleado);
router.put('/:id', validateSchema(updateEmpleadoSchema), updateEmpleado);
router.delete('/:id', deleteEmpleado);

export default router;
