import { X } from "lucide-react";

function CertificateModal({ certificate, isOpen, onClose }) {
  if (!isOpen || !certificate) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
        >
          <X size={22} />
        </button>

        {/* Certificate Image */}
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full rounded-2xl max-h-[90vh] object-contain"
        />
      </div>
    </div>
  );
}

export default CertificateModal;