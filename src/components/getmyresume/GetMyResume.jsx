function GetMyResume() {
  const downloadCurriculum = () => {
    const link = document.createElement("a");
    link.href = "/public/resume/Itallo_Aquino_Resume.pdf"; // Caminho para o currículo
    link.download = "Itallo_Aquino_Resume.pdf"; // Nome do arquivo ao ser baixado
    link.click();
  };

  return (
    <>
      <button
        onClick={downloadCurriculum}
        className="
      flex text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2 md:text-lg items-center
      "
      >
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>Get My Resume</span>
      </button>
    </>
  );
}

export default GetMyResume;
