CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome TEXT,
    quantidade TEXT,
    info TEXT
);

INSERT INTO usuarios (nome, quantidade, info) VALUES
    ('Geladeira Frost Free Brastemp', '5', 'Dísponivel'),
    ('Ar Condicionado Split Electrolux', '8', 'Dísponivel'),
    ('Freezer Horizontal Consul', '3', 'Dísponivel'),
    ('Cervejeira Consul Mais', '2', 'Dísponivel'),
    ('Frigobar Brastemp Retrô', '6', 'Dísponivel'),
    ('Ar Condicionado Janela Springer Midea', '4', 'Dísponivel'),
    ('Refrigerador Electrolux Duplex', '7', 'Dísponivel'),
    ('Freezer Vertical Esmaltec', '3', 'Dísponivel'),
    ('Geladeira Panasonic Frost Free', '5', 'Dísponivel'),
    ('Ar Condicionado Portátil Philco', '2', 'Dísponivel');