export default function NewProjectForm() {
  return (
    <>
      <form action="submit" className="flex justify-center">
        <label htmlFor="projectName">Project Name: </label>
        <input
          type="text"
          name="projectName"
          className="border border-solid border-black ml-2"
        />
      </form>
    </>
  );
}
