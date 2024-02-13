const router = require('express').Router();

import userRoutes from './user-routes';
import thoughtRoutes from './thought-routes';

router.use('/user',userRoutes);
router.use('/thought',thoughtRoutes);

export default router;