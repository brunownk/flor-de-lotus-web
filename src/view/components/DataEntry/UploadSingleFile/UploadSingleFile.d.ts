import { FileType } from "@type/file-type";
import { UploadProps } from "antd";

export interface IUploadSingleFileProps extends UploadProps {
  value?: string;
  maxSizeInMb?: number;
  onChange?: (value: FileType) => void;
}
