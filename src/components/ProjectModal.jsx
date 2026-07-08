import Modal from "react-modal";

Modal.setAppElement("#root");

function ProjectModal({ isOpen, onClose, project }) {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="bg-white max-w-3xl mx-auto mt-20 rounded-xl p-8 outline-none shadow-2xl"
      overlayClassName="fixed inset-0 bg-black/70 flex justify-center items-start"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-72 object-cover rounded-lg"
      />

      <h2 className="text-4xl font-bold mt-6 text-blue-600">
        {project.title}
      </h2>

      <p className="mt-4 text-gray-600">
        {project.description}
      </p>

      <h3 className="text-xl font-bold mt-6">
        Technologies Used
      </h3>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-bold mt-6">
        Features
      </h3>

      <ul className="list-disc ml-6 mt-3 text-gray-700">
        <li>Responsive Design</li>
        <li>Modern User Interface</li>
        <li>GitHub Integration</li>
        <li>Professional Architecture</li>
      </ul>

      <div className="flex gap-4 mt-8">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="border-2 border-blue-600 text-blue-600 px-5 py-3 rounded-lg"
        >
          Live Demo
        </a>

        <button
          onClick={onClose}
          className="ml-auto bg-red-500 text-white px-5 py-3 rounded-lg"
        >
          Close
        </button>
      </div>
    </Modal>
  );
}

export default ProjectModal;