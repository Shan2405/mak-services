"use client";

import React, { useState } from "react";
import Modal from "@/components/ui/Modal";
import ServiceRequestForm from "@/components/forms/ServiceRequestForm";
import { MessageCircle } from "lucide-react";

const QuickContactModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 cursor-pointer z-100 w-14 h-14 rounded-full bg-accent text-text-white shadow-lg hover:shadow-xl hover:bg-accent-dark flex items-center justify-center transition-all group"
        aria-label="Quick contact"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute left-full ml-3 px-3 py-1.5 bg-secondary text-text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
          Quick Quote
        </span>
      </button>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Get a Quick Quote"
        size="md"
      >
        <p className="text-text-secondary mb-6">
          Fill out this quick form and we'll get back to you within 24 hours with a free estimate.
        </p>
        <ServiceRequestForm 
          compact={true}
        />
      </Modal>
    </>
  );
};

export default QuickContactModal;