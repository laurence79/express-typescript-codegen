import { Router } from 'express';
import * as RequestHandlers from './requestHandlerTypes';
import * as Validators from './schemaValidators';

export const router = ({
  getHealth,
  postAnonymous,
  postCreate,
  postLogin,
  postVerify,
  getGrants,
  postGrants,
  getGrantById,
  deleteGrantById
}: RequestHandlers.RequestHandlers): Router => {
  return Router()
    .get('/health', getHealth)
    .post('/anonymous', Validators.postAnonymous, postAnonymous)
    .post('/create', Validators.postCreate, postCreate)
    .post('/login', Validators.postLogin, postLogin)
    .post('/verify', postVerify)
    .get('/grants', getGrants)
    .post('/grants', Validators.postGrants, postGrants)
    .get('/grants/:grantId', getGrantById)
    .delete('/grants/:grantId', deleteGrantById);
};
