import { Response, Request } from "express";
import { GetTagsService } from "./../../service/Item/getTags";

export const GetTags = async (req: Request, res: Response, next) => {
  try {
    const topics = await GetTagsService();

    return res.json(topics);
  } catch (e) {
    next(e);
  }
};
