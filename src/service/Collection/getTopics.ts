import { ApiError } from "./../../exceptions/apiError";
import { Topic } from "./../../models/topic";

export const GetTopicsService = async () => {
  const topicsData = await Topic.find();
  if (!topicsData) {
    throw ApiError.BadRequest("Something wrong...");
  }

  return topicsData;
};
