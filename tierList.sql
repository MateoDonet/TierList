-- CREATE USER tierlist WITH PASSWORD 'T1&rL1st';

CREATE TABLE utilisateur (
    u_id serial not null,
	u_username CHARACTER VARYING not null,
	u_password CHARACTER VARYING not null,
    u_statut INT not null, -- 1 : admin | 2 : user
	u_last_connexion DATE null,
	CONSTRAINT PK_Utilisateur primary key (u_id)
); ALTER TABLE utilisateur OWNER TO tierlist;

CREATE TABLE tier (
	tier_id serial not null,
	tier_label CHARACTER VARYING,
	CONSTRAINT PK_Tier primary key (tier_id)
); ALTER TABLE tier OWNER TO tierlist;

CREATE TABLE categorie (
	categ_id serial not null,
	categ_label CHARACTER VARYING,
	CONSTRAINT PK_Categorie primary key (categ_id)
); ALTER TABLE categorie OWNER TO tierlist;

CREATE TABLE media (
	media_id serial not null,
	media_titre CHARACTER VARYING,
	media_description CHARACTER VARYING,
	media_img CHARACTER VARYING,
	media_etat INT, -- 1 : En cours | 2 : Terminé
    media_categ_id INT not null,
	CONSTRAINT PK_Media primary key (media_id),
	CONSTRAINT FK_Media_Categorie foreign key (media_categ_id) REFERENCES categorie(categ_id) ON UPDATE CASCADE ON DELETE CASCADE
); ALTER TABLE media OWNER TO tierlist;

CREATE TABLE utilisateur_media_list (
	uml_id serial not null,
	uml_u_id INT not null,
	uml_media_id INT not null,
	uml_tier_id INT not null,
	uml_avancement CHARACTER VARYING,
	CONSTRAINT PK_Utilisateur_media_list primary key (uml_id),
	CONSTRAINT FK_Utilisateur_media_list_User foreign key (uml_u_id) REFERENCES utilisateur(u_id) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT FK_Utilisateur_media_list_Media foreign key (uml_media_id) REFERENCES media(media_id) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT FK_Utilisateur_media_list_Tier foreign key (uml_tier_id) REFERENCES tier(tier_id) ON UPDATE CASCADE ON DELETE CASCADE
); ALTER TABLE utilisateur_media_list OWNER TO tierlist;

INSERT INTO utilisateur (u_username, u_password, u_statut) VALUES 
('admin', 'Maux2d3passe', 1),
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
('animé');

INSERT INTO media (media_titre, media_description, media_img, media_etat, media_categ_id) VALUES 
('Brooklyn Nine-Nine', 'Cette comédie chorale suit les personnages et les affaires d un commissariat de Brooklyn, loin des dangers et des affaires plus spectaculaires du très chic Manhattan.', '', 2, 2);

INSERT INTO utilisateur_media_list (uml_u_id, uml_media_id, uml_tier_id, uml_avancement) VALUES
(2, 1, 1, 'Saison 7 Episode final');
