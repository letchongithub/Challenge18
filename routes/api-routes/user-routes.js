const router = require('express').Router();
import { getAllUsers, getUserById, createUser, updateUserById, deleteUserById, addFriend, removeFriend } from '../../controllers/user-controller';

router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

export default router;