import { Router } from 'express';
import * as RequestHandlers from './handlers';
import * as Validators from './requestValidators';

export const router = ({
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
    .post('/pet', Validators.addPet, addPet)
    .put('/pet', Validators.updatePet, updatePet)
    .get('/pet/findByStatus', Validators.findPetsByStatus, findPetsByStatus)
    .get('/pet/findByTags', Validators.findPetsByTags, findPetsByTags)
    .get('/pet/:petId', Validators.getPetById, getPetById)
    .post('/pet/:petId', Validators.updatePetWithForm, updatePetWithForm)
    .delete('/pet/:petId', Validators.deletePet, deletePet)
    .post('/store/order', Validators.placeOrder, placeOrder)
    .get('/store/order/:orderId', Validators.getOrderById, getOrderById)
    .delete('/store/order/:orderId', Validators.deleteOrder, deleteOrder)
    .get('/store/inventory', Validators.getInventory, getInventory)
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
    .get('/user/:username', Validators.getUserByName, getUserByName)
    .put('/user/:username', Validators.updateUser, updateUser)
    .delete('/user/:username', Validators.deleteUser, deleteUser)
    .get('/user/login', Validators.loginUser, loginUser)
    .get('/user/logout', Validators.logoutUser, logoutUser)
    .post('/user', Validators.createUser, createUser);
};
