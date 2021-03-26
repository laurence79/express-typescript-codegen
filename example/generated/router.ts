import { Router } from 'express';
import * as RequestHandlers from './handlers';
import * as Validators from './requestValidators';

export const router = (
  {
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
  }: RequestHandlers.RequestHandlers,
  options?: Validators.ValidationOptions
): Router => {
  return Router()
    .post('/pet', Validators.addPet(options), addPet)
    .put('/pet', Validators.updatePet(options), updatePet)
    .get(
      '/pet/findByStatus',
      Validators.findPetsByStatus(options),
      findPetsByStatus
    )
    .get('/pet/findByTags', Validators.findPetsByTags(options), findPetsByTags)
    .get('/pet/:petId', Validators.getPetById(options), getPetById)
    .post(
      '/pet/:petId',
      Validators.updatePetWithForm(options),
      updatePetWithForm
    )
    .delete('/pet/:petId', Validators.deletePet(options), deletePet)
    .post('/store/order', Validators.placeOrder(options), placeOrder)
    .get(
      '/store/order/:orderId',
      Validators.getOrderById(options),
      getOrderById
    )
    .delete(
      '/store/order/:orderId',
      Validators.deleteOrder(options),
      deleteOrder
    )
    .get('/store/inventory', Validators.getInventory(options), getInventory)
    .post(
      '/user/createWithArray',
      Validators.createUsersWithArrayInput(options),
      createUsersWithArrayInput
    )
    .post(
      '/user/createWithList',
      Validators.createUsersWithListInput(options),
      createUsersWithListInput
    )
    .get('/user/:username', Validators.getUserByName(options), getUserByName)
    .put('/user/:username', Validators.updateUser(options), updateUser)
    .delete('/user/:username', Validators.deleteUser(options), deleteUser)
    .get('/user/login', Validators.loginUser(options), loginUser)
    .get('/user/logout', Validators.logoutUser(options), logoutUser)
    .post('/user', Validators.createUser(options), createUser);
};
