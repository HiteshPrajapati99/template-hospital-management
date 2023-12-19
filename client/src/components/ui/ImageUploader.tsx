import { FC, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";
import "twin.macro";

interface uploaderProps {
  value?: string | undefined;
  onChange?: (file: File) => void;
}

const ImageUploader: FC<uploaderProps> = ({ value, onChange = () => {} }) => {
  const [imagePreview, setimagePreview] = useState<null | string>(null);

  const onDrop = useCallback((file: File[]) => {
    if (file.length !== 0) {
      onChange(file[0]);
      setimagePreview(URL.createObjectURL(file[0]));
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`flex flex-col items-center justify-center rounded-[20px] ${
        imagePreview ? "p-4" : "p-10"
      } gap-3`}
      style={{
        border: `3px dashed  ${isDragActive ? "#376c6c" : "#45FFFF"} `,
        borderSpacing: "20px",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <input {...getInputProps()} value={value} />

      {imagePreview ? (
        <img
          src={imagePreview}
          alt="image-preview"
          className="h-[170px] w-[300px] rounded-[20px]"
        />
      ) : (
        <>
          <FiUpload tw="text-[40px] font-bold text-[#45FFFF]" />
          {isDragActive ? (
            <p className="text-[20px] font-[400] text-white">
              Drop the files here ...
            </p>
          ) : (
            <p className="text-[20px] font-[400] text-white">
              Upload a Photo or drag and drop here
            </p>
          )}
          <p className="text-[16px] font-[400] text-muted">
            PNG, JPG, JPEG, WEBP up to 10MB
          </p>
        </>
      )}
    </div>
  );
};

export default ImageUploader;
