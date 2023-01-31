import {Request, Response} from "express";
import {v2 as cloudinary} from "cloudinary";
import * as dotenv from "dotenv";
import path from "path";
import {typesForFoleder, uploadPath} from "../constants";

import bufferToDataUrl from "buffer-to-data-url";
import {AudioFileResponse, FileResponse, VideoFileResponse} from "../interfaces";

dotenv.config({path: path.join(__dirname, "../.env")});
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const filesDelete = async (req: Request, res: Response) => {
  const ids: string[] = req.body.public_ids;
  let resolve: Object[] = [];

  for await (const id of ids) {
    await cloudinary.uploader.destroy(id, function (err, result) {
      resolve.push(result);
    });
  }

  res.json({message: "files deleted", res: resolve});
};

export const filesUpload = async (req: Request, res: Response) => {
  const files = req.files as Express.Multer.File[];
  const paths = files?.map((el) => el.buffer);
  let resolve: Object[] = [];
  if (files) {
    for await (const file of files) {
      const {buffer} = file;
      const dataUrl = await bufferToDataUrl(file.mimetype, buffer);
      const fileName = file.originalname.replace(/\.[^/.]+$/, "");
      const fileType = file.mimetype.split("/")[0];
      const folder = typesForFoleder.find((el) => el.type === fileType)?.folder;

      await cloudinary.uploader
        .upload(dataUrl, {
          use_filename: true,
          public_id: `${fileName}`,
          resource_type: "auto",
          folder: folder ? folder : "samples",
        })
        .then((res) => {
          resolve.push(res);
        });
    }
    res.json({message: "files uploaded", res: resolve});
  } else res.json({message: "files is empty"});
};

export const getImages = async (req: Request, res: Response) => {
  const result: Array<FileResponse> = await cloudinary.search
    .expression("folder=img")
    .execute()
    .then((data) => data.resources);

  const files: Array<FileResponse> = [];
  result.forEach((el) => {
    files.push({
      public_id: el.public_id,
      folder: el.folder,
      filename: el.filename,
      format: el.format,
      resource_type: el.resource_type,
      uploaded_at: el.uploaded_at,
      bytes: el.bytes,
      url: `${uploadPath.cloudinaryImg}${el.public_id}.${el.format}`,
    });
  });

  res.send(files);
};
export const getAudios = async (req: Request, res: Response) => {
  const result: Array<AudioFileResponse> = await cloudinary.search
    .expression("folder=audio")
    .execute()
    .then((data) => data.resources);
  const files: Array<AudioFileResponse> = [];
  result.forEach((el) => {
    files.push({
      public_id: el.public_id,
      folder: el.folder,
      filename: el.filename,
      format: el.format,
      resource_type: el.resource_type,
      uploaded_at: el.uploaded_at,
      bytes: el.bytes,
      url: `${uploadPath.cloudinaryAudio}${el.public_id}.${el.format}`,
      duration: el.duration,
    });
  });

  res.send(files);
};
export const getVideos = async (req: Request, res: Response) => {
  const result: Array<VideoFileResponse> = await cloudinary.search
    .expression("folder=video")
    .execute()
    .then((data) => data.resources);
  const files: Array<VideoFileResponse> = [];
  result.forEach((el) => {
    files.push({
      public_id: el.public_id,
      folder: el.folder,
      filename: el.filename,
      format: el.format,
      resource_type: el.resource_type,
      uploaded_at: el.uploaded_at,
      bytes: el.bytes,
      url: `${uploadPath.cloudinaryAudio}${el.public_id}.${el.format}`,
      duration: el.duration,
    });
  });

  res.send(files);
};
