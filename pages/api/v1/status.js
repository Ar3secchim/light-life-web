function Status(request, responde) {
  responde.status(200).json({ status: "Tudo Funcionando", code: 200 });
}

export default Status;