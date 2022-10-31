import { ApiError } from "./../../exceptions/apiError";
import { Tag } from "./../../models/tag";

export const GetTagsService = async () => {
  const tagsData = await Tag.find();
  if (!tagsData) {
    throw ApiError.BadRequest("Something wrong...");
  }

  return tagsData;
};
