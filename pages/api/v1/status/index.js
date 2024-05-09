function status(request, response) {
  response.status(200).json({ chave: "xama no curso.dev" });
}

export default status;
