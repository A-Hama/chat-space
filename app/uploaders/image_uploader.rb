class ImageUploader < CarrierWave::Uploader::Base
  process resize_to_fit: [400, 400]

  storage :fog
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  def extension_whitelist
    %w(jpg jpeg gif png)
  end
end
