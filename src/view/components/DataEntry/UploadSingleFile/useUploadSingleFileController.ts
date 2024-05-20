import { useState } from "react";

import { message } from 'antd';

import { FileType } from "@type/file-type";
import { getBase64 } from "@utils/get-base-64";

import { IUploadSingleFileProps } from "./UploadSingleFile";

export function useUploadSingleFileController({ value, maxSizeInMb = 3, onChange }: IUploadSingleFileProps) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(value);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  const handlePreview = async () => {
    setPreviewOpen(true);
  };

  const beforeUpload = (file: FileType) => {
    const isLt3M = file.size / 1024 / 1024 < maxSizeInMb;

    if (!isLt3M) {
      message.error(`Image must smaller than ${maxSizeInMb}MB!`);
    }

    getBase64(file, (url) => {
      setLoading(false);
      setImageUrl(url);
    });

    if (onChange) {
      onChange(file as FileType);
    }

    return false;
  };


  return {
    loading,
    imageUrl,
    previewOpen,
    previewImage,
    setPreviewImage,
    setPreviewOpen,
    handlePreview,
    beforeUpload,
    setImageUrl,
  };
}
