/* ¡Escribe tus comandos en este archivo! */

const ejercicio02 = 'SELECT title FROM movies WHERE duration<90;';

const ejercicio03 = 'SELECT title FROM movies WHERE year BETWEEN 1930 AND 1940;';

const ejercicio04 = 'SELECT title FROM movies WHERE title LIKE '%til%';';

const ejercicio05 = 'SELECT title FROM movies WHERE ARRAY_LENGTH(actors, 1) = 1;';//crdinality(actors)=1

const ejercicio06 = 'SELECT title, ROUND(AVG(value)::NUMERIC, 2) AS avg_rating FROM movies CROSS JOIN LATERAL unnest(ratings) AS t(value) GROUP BY title;';
                     //SELECT title, AVG 
const ejercicio07 = '';

module.exports = {
   ejercicio02,
   ejercicio03,
   ejercicio04,
   ejercicio05,
   ejercicio06,
   ejercicio07,
};
