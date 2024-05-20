import { GetProp } from "antd";
import { UploadProps } from "antd/lib";

export type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];
