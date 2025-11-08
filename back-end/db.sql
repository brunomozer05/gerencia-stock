CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome TEXT,
    quantidade TEXT,
    info TEXT
);

INSERT INTO produtos (nome, quantidade, info) VALUES
    ('Geladeira Brastemp', '5', 'Indisponível'),
    ('Ar Split Electrolux', '8', 'Disponível'),
    ('Freezer Consul', '3', 'Indisponível'),
    ('Cervejeira Consul', '2', 'Indisponível'),
    ('Frigobar Brastemp', '6', 'Disponível'),
    ('Ar Janela Midea', '4', 'Indisponível'),
    ('Refrigerador Electrolux', '7', 'Disponível'),
    ('Freezer Esmaltec', '3', 'Indisponível'),
    ('Geladeira Panasonic', '5', 'Disponível'),
    ('Ar Portátil Philco', '2', 'Indisponível');

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL, 
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);