import { X } from "lucide-react";

export default function ImagePreviewModal({ item, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Close image preview"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="p-4 bg-gray-100">
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p className="text-sm text-gray-600">Kode: {item.id}</p>
        </div>
        <div className="flex items-center justify-center p-4 bg-gray-200 h-[calc(90vh-100px)]">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
