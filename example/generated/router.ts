import { Router } from 'express';
import * as RequestHandlers from './handlers';
import * as Validators from './validators';

export const router = ({
  uploadFile,
  addPet,
  updatePet,
  findPetsByStatus,
  findPetsByTags,
  getPetById,
  updatePetWithForm,
  deletePet,
  placeOrder,
  getOrderById,
  deleteOrder,
  getInventory,
  createUsersWithArrayInput,
  createUsersWithListInput,
  getUserByName,
  updateUser,
  deleteUser,
  loginUser,
  logoutUser,
  createUser
}: RequestHandlers.RequestHandlers): Router => {
  return Router()
    .post('/pet/:petId/uploadImage', uploadFile)
    .post('/pet', Validators.addPet, addPet)
    .put('/pet', Validators.updatePet, updatePet)
    .get('/pet/findByStatus', findPetsByStatus)
    .get('/pet/findByTags', findPetsByTags)
    .get('/pet/:petId', getPetById)
    .post('/pet/:petId', updatePetWithForm)
    .delete('/pet/:petId', deletePet)
    .post('/store/order', Validators.placeOrder, placeOrder)
    .get('/store/order/:orderId', getOrderById)
    .delete('/store/order/:orderId', deleteOrder)
    .get('/store/inventory', getInventory)
    .post(
      '/user/createWithArray',
      Validators.createUsersWithArrayInput,
      createUsersWithArrayInput
    )
    .post(
      '/user/createWithList',
      Validators.createUsersWithListInput,
      createUsersWithListInput
    )
    .get('/user/:username', getUserByName)
    .put('/user/:username', Validators.updateUser, updateUser)
    .delete('/user/:username', deleteUser)
    .get('/user/login', loginUser)
    .get('/user/logout', logoutUser)
    .post('/user', Validators.createUser, createUser);
};
