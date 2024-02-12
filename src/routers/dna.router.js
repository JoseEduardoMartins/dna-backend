import { Router } from 'express';
const router = Router();
import { validateFields } from '../utils/http.validation.util';
import { validators, requireValidators } from '../validations/dna.validations';
import controller from '../controllers/dna.controller';

router.post('/dnas/', validateFields(requireValidators, validators), controller.save);

export default router;
