import express, {Request, Response} from "express";
import {v2 as cloudinary} from "cloudinary";
import * as dotenv from "dotenv";
import path, {format} from "path";
import {uploadPath} from "../constants";
import multer from "../utils/multer";
import bufferToDataUrl from "buffer-to-data-url";

dotenv.config({path: path.join(__dirname, "../.env")});
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});
interface FileResponse {
  public_id: string;
  folder: string;
  filename: string;
  format: string;
  uploaded_at: string;
  bytes: number;
  url: string;
}

interface AudioFileResponse extends FileResponse {
  duration: number;
}

export const imageUpload = async (req: Request, res: Response) => {
  const files = req.files as Express.Multer.File[];
  const paths = files?.map((el) => el.buffer);
  //console.log(paths);
  if (files) {
    for await (const file of files) {
      const {buffer} = file;
      const dataUrl = await bufferToDataUrl(file.mimetype, buffer);
      const fileName = file.originalname.replace(/\.[^/.]+$/, "");
      await cloudinary.uploader
        .upload(dataUrl, {
          use_filename: true,
          public_id: `${fileName}`,
          resource_type: "image",
          folder: "img",
        })
        .then((res) => {
          console.log(res);
        });
    }
  }

  //console.log(files);

  res.json({message: "files uploaded", files: files});
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
      uploaded_at: el.uploaded_at,
      bytes: el.bytes,
      url: `${uploadPath.cloudinaryAudio}${el.public_id}.${el.format}`,
      duration: el.duration,
    });
  });

  res.send(files);
};
