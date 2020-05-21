import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';

import StoreUserService from '../services/StoreUserService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

import auth from '../middlewares/auth';

const usersRouter = Router();

const upload = multer(uploadConfig);

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const storeUser = new StoreUserService();

  const user = await storeUser.execute({
    name,
    email,
    password,
  });

  delete user.password;

  return response.json(user);
});

usersRouter.patch(
  '/avatar',
  auth,
  upload.single('avatar'),
  async (request, response) => {
    const updateUserAvatar = new UpdateUserAvatarService();

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  },
);

export default usersRouter;
