import { Response, Request } from "express";
import { validationResult } from "express-validator";

import { AddCollectionService } from "./../../service/Collection/addCollection";
import { ApiError } from "../../exceptions/apiError";
import { cloudinary } from "../../utils/cloudinary";

export const AddCollection = async (req: Request, res: Response, next) => {
  try {
    //const fileStr = req.body.image.data;
    // const uploadResponse = await cloudinary.uploader.upload(fileStr, {
    //  upload_preset: "dev_setups",
    // });
    //console.log(uploadResponse);

    const { id, title, description, image, topic, itemsOptions } = req.body;
    const collectionData = await AddCollectionService(
      id,
      title,
      description,
      image,
      topic,
      itemsOptions
    );
    res.json({ collectionData });
  } catch (e) {
    next(e);
  }
};
