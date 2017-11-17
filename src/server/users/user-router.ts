import { Router } from "express";
import { userDao, UserDao } from "./user-dao";

export const userRouterFactory = (userDao: UserDao) => {
  const router = Router();

  router.get("/", (req, res) => {
    userDao.select()
      .then((users) => res.send(users))
      .catch((err) => res.status(500).send({ detail: err.detail }));
  });

  return router;
};

export const userRouter = userRouterFactory(userDao);
