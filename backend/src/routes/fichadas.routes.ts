import { Router } from 'express';
import { getFichadas, getFichadaById, createFichada, deleteFichada } from '../controllers/fichadas.controller';
import { validateSchema } from '../middlewares/validate.middleware';
import { createFichadaSchema } from '../schemas/fichada.schema';

const router = Router();

// GET    /api/fichadas?fecha=YYYY-MM-DD&empleadoId=1
router.get('/', getFichadas);

// GET    /api/fichadas/:id
router.get('/:id', getFichadaById);

// POST   /api/fichadas
router.post('/', validateSchema(createFichadaSchema), createFichada);

// DELETE /api/fichadas/:id  (solo manuales)
router.delete('/:id', deleteFichada);

export default router;
