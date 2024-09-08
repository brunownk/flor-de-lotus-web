import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Upload as AntdUpload, Image } from 'antd';
import ImgCrop from 'antd-img-crop';

import { I18_DEFAULT_NS } from '@config/app-keys';

import CameraPlus from '@assets/icons/camera-plus.svg?react';

import { Avatar } from '@components/Avatar';

import { useUploadSingleFileController } from './useUploadSingleFileController';
import { IUploadSingleFileProps } from './UploadSingleFile';

import './styles.scss';

export function UploadPlaceholder() {
  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'components.single-upload-photo',
  });

  return (
    <div className="upload-placeholder">
      <CameraPlus />
      <p>{translate('upload')}</p>
    </div>
  );
}

export const UploadSingleFile = forwardRef(
  (
    {
      value,
      maxSizeInMb,
      accept = 'image/*',
      onChange,
      ...props
    }: IUploadSingleFileProps,
    ref,
  ) => {
    const {
      imageUrl,
      previewOpen,
      previewImage,
      setPreviewImage,
      setPreviewOpen,
      handlePreview,
      beforeUpload,
    } = useUploadSingleFileController({
      value,
      maxSizeInMb,
      onChange,
    });

    return (
      <>
        <ImgCrop rotationSlider showReset showGrid>
          <AntdUpload
            ref={ref}
            name="file"
            id="upload-component"
            listType="picture-circle"
            showUploadList={false}
            accept={accept}
            beforeUpload={beforeUpload}
            onPreview={handlePreview}
            {...props}
          >
            <UploadPlaceholder />
            {imageUrl && <Avatar src={imageUrl} size={126} />}
          </AntdUpload>
        </ImgCrop>

        {previewImage && (
          <Image
            wrapperStyle={{ display: 'none' }}
            preview={{
              visible: previewOpen,
              onVisibleChange: (visible) => setPreviewOpen(visible),
              afterOpenChange: (visible) => !visible && setPreviewImage(''),
            }}
            src={previewImage}
          />
        )}
      </>
    );
  },
);
