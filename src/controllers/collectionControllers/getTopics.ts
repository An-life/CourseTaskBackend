import { Response, Request } from "express";

import { GetTopicsService } from "./../../service/Collection/getTopics";

export const GetTopics = async (req: Request, res: Response, next) => {
  try {
    const topics = await GetTopicsService();

    return res.json(topics);
  } catch (e) {
    next(e);
  }
};
