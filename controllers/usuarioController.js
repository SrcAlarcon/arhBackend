const registrar = (req, res) => {
    res.json({ url: "Desde API/USUARIO "});
};

const perfil = (req, res) => {
    res.json({ url: "Desde API/USUARIO/perfil "});
};

export { registrar, perfil};