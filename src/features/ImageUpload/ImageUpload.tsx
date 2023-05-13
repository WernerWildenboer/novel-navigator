import React, { useState } from "react";
import ImageUploadView from "./ImageUploadView";

const ImageUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleImageSelect = async (file: File) => {
    setSelectedFile(file);
  };

  return <ImageUploadView onImageSelect={handleImageSelect} />;
};

export default ImageUpload;
