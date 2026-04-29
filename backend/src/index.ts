import express from 'express';
import cors from 'cors';

import horariosRoutes from './routes/horarios.routes';
import empleadosRoutes from './routes/empleados.routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas API
app.use('/api/horarios', horariosRoutes);
app.use('/api/empleados', empleadosRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Controlia Backend API V1 - Funcionando' });
});

app.listen(port, () => {
  console.log(`[server]: Servidor inicializado en http://localhost:${port}`);
});
