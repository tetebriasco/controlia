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

// Catch-all 404 para la API (devolver siempre JSON)
app.use((req, res) => {
  console.log(`[404] Ruta no encontrada: ${req.method} ${req.url}`);
  res.status(404).json({ 
    message: 'Ruta no encontrada en el servidor', 
    path: req.url,
    method: req.method 
  });
});

app.listen(port, () => {
  console.log(`[server]: Servidor inicializado en el puerto ${port}`);
});
