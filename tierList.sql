CREATE TABLE user {
    u_id serial not null,
	u_username CHARACTER VARYING not null,
	u_password CHARACTER VARYING not null,
    u_statut INT not null, -- 1 : admin | 2 : user
	u_last_connexion DATE null,
	CONSTRAINT PK_User primary key (tier_id)
};

CREATE TABLE tier (
	tier_id serial not null,
	tier_label CHARACTER VARYING,
	CONSTRAINT PK_Tier primary key (tier_id)
);

CREATE TABLE categorie (
	categ_id serial not null,
	categ_label CHARACTER VARYING,
	CONSTRAINT PK_Categorie primary key (categ_id)
);

CREATE TABLE media {
	media_id serial not null,
	media_titre CHARACTER VARYING,
	media_description CHARACTER VARYING,
	media_img CHARACTER VARYING,
	media_etat CHARACTER VARYING,
	media_avancement CHARACTER VARYING,
    media_u_id INT not null,
    media_tier_id INT not null,
    media_categ_id INT not null,
	CONSTRAINT PK_Media primary key (media_id),
	CONSTRAINT FK_Media_User foreign key (media_u_id) REFERENCES user(u_id) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT FK_Media_Tier foreign key (media_tier_id) REFERENCES tier(tier_id) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT FK_Media_Categorie foreign key (media_categ_id) REFERENCES categorie(categ_id) ON UPDATE CASCADE ON DELETE CASCADE
};

INSERT INTO user (u_username, u_password, u_statut) VALUES 
('mdonet', 'Eysines33', 2);

INSERT INTO tier (tier_label) VALUES 
('S'),
('A'),
('B'),
('C'),
('D'),
('E'),
('F');

INSERT INTO categorie (categ_label) VALUES 
('manga'),
('série'),
('film'),
('anime');

INSERT INTO media (media_titre, media_description, media_img, media_etat, media_avancement, media_u_id, media_tier_id, media_categ_id) VALUES 
('Brooklyn Nine-Nine', 'description', '', 'terminé', 'S7 - Episode final', 1, 1, 2);