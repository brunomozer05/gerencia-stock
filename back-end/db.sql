CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome TEXT,
    quantidade TEXT,
    info TEXT
);

INSERT INTO usuarios (nome, quantidade, info) VALUES
    ('Geladeira Frost Free Brastemp', '5', 'Modelo BRM45HK 375L'),
    ('Ar Condicionado Split Electrolux', '8', 'Modelo VI12F 12000 BTUs'),
    ('Freezer Horizontal Consul', '3', 'Modelo CHB53 534L'),
    ('Cervejeira Consul Mais', '2', 'Modelo CZD12 82L'),
    ('Frigobar Brastemp Retrô', '6', 'Modelo BRA08 76L'),
    ('Ar Condicionado Janela Springer Midea', '4', 'Modelo 10000 BTUs'),
    ('Refrigerador Electrolux Duplex', '7', 'Modelo DB53X 454L'),
    ('Freezer Vertical Esmaltec', '3', 'Modelo EFH500 400L'),
    ('Geladeira Panasonic Frost Free', '5', 'Modelo NR-BT54PV1X 423L'),
    ('Ar Condicionado Portátil Philco', '2', 'Modelo PAC11000QF 11000 BTUs');