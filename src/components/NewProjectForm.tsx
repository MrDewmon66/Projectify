export default function NewProjectForm({ onClose }: { onClose: () => void }) {
  return (
    <>
      <form action="submit" className="flex justify-center">
        <label htmlFor="projectName">Project Name: </label>
        <input
          type="text"
          name="projectName"
          className="border border-solid border-black ml-2"
        />
        <button onClick={onClose}>Close</button>
      </form>
    </>
  );
}
