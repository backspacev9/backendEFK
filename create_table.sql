create TABLE category(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  imageSrc VARCHAR(255)
)
create TABLE card(
  id SERIAL PRIMARY KEY,
  word VARCHAR(255),
  translation VARCHAR(255)
  imageSrc VARCHAR(255)
  audioSrc VARCHAR(255)
  category_id INTEGER,
  FOREIGN KEY (category_id) REFERENCES category (id)

)
