-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 07, 2022 at 10:14 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cine`
--

-- --------------------------------------------------------

--
-- Table structure for table `catalog_movies`
--

CREATE TABLE `catalog_movies` (
  `id` int(11) NOT NULL,
  `title` varchar(250) DEFAULT NULL,
  `overview` text DEFAULT NULL,
  `poster_src` text DEFAULT NULL,
  `backdrop_src` text DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `vote_count` int(11) DEFAULT NULL,
  `vote_average` decimal(10,0) DEFAULT NULL,
  `popularity` decimal(10,0) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `active` tinyint(4) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `catalog_movies`
--

INSERT INTO `catalog_movies` (`id`, `title`, `overview`, `poster_src`, `backdrop_src`, `release_date`, `vote_count`, `vote_average`, `popularity`, `createdAt`, `updatedAt`, `active`) VALUES
(1, 'Animales fantásticos: Los secretos de Dumbledore', 'El profesor Albus Dumbledore sabe que el poderoso mago oscuro Gellert Grindelwald está haciendo planes para apoderarse del mundo mágico. Incapaz de detenerlo él solo, confía en el Magizoólogo Newt Scamander para dirigir un intrépido equipo de magos, brujas y un valiente panadero Muggle en una misión peligrosa, donde se encuentran con antiguos y nuevos animales y se enfrentan a una legión cada vez más numerosa de seguidores de Grindelwald.', '/yOeuJdwag4bAlnvgrdweRoiuXGC.jpg', '/7ucaMpXAmlIM24qZZ8uI9hCY0hm.jpg', '2022-04-06', 1497, '7', '9942', NULL, NULL, 1),
(2, 'Sonic 2: La película', 'Después de establecerse en Green Hills, Sonic se muere por demostrar que tiene madera de auténtico héroe, pero Robotnik regresa con nuevo compañero Knuckles, en busca de una esmeralda que tiene el poder de destruir civilizaciones, pero Sonic no está solo, le ayudará Tails.', '/yOeuJdwag4bAlnvgrdweRoiuXGC.jpg', '/sJiHVM0A3OXDVxl4Z6a7ihMPHfm.jpg', '2022-03-30', 1867, '8', '5648', NULL, NULL, 1),
(3, 'Morbius', 'Peligrosamente enfermo de un extraño trastorno sanguíneo, y determinado a salvar a otras personas que padecen su mismo destino, el doctor Morbius intenta una apuesta desesperada. Lo que en un principio parece ser un éxito radical, pronto se revela como un remedio potencialmente peor que la enfermedad.', '/6WmTdYNoSinBAXs0AfTTCSaV5lw.jpg', '/gG9fTyDL03fiKnOpf2tr01sncnt.jpg', '2022-03-30', 1458, '6', '5841', NULL, NULL, 1),
(4, 'La ciudad perdida', 'Una solitaria novelista romántica de gira con el modelo de la portada de su último libro se ve envuelta en un intento de secuestro que llevará a ambos a una feroz aventura en la jungla.', '/grEVYkBAVIzQ4JmZ7ydceN9DFQR.jpg', '/grEVYkBAVIzQ4JmZ7ydceN9DFQR.jpg', '2022-03-24', 974, '7', '5892', NULL, NULL, 1),
(5, 'La memoria de un asesino', 'Alex, un asesino a sueldo, descubre que se ha convertido en un objetivo después de que se niega a completar un trabajo para una peligrosa organización criminal. Con el sindicato del crimen y el FBI persiguiéndolo, Alex tiene las habilidades para mantenerse a la vanguardia, excepto por una cosa: está luchando con una pérdida de memoria severa que afecta todos sus movimientos. Alex debe cuestionar cada una de sus acciones y en quién puede confiar en última instancia.', '/4Q1n3TwieoULnuaztu9aFjqHDTI.jpg', '/kiH3KPWi7BaRMvdAigcwrUFViHl.jpg', '2022-04-28', 211, '7', '4933', NULL, NULL, 1),
(6, 'El Hombre del Norte', 'El príncipe Amleth está a punto de convertirse en hombre pero, en ese momento, su tío asesina brutalmente a su padre y secuestra a la madre del niño. Dos décadas después, Amleth es un vikingo que tiene la misión de salvar a su madre.', '/rdx0bIkwxW3EHvWn5kxZBFUT1Am.jpg', '/cqnVuxXe6vA7wfNWubak3x36DKJ.jpg', '2022-04-07', 1369, '7', '4080', NULL, NULL, 1),
(7, 'Jurassic World Dominion', 'Cuatro años después de la destrucción de Isla Nublar, los dinosaurios conviven – y cazan – con los seres humanos en todo el mundo. Este frágil equilibrio cambiará el futuro y decidirá, de una vez por todas, si los seres humanos seguirán en la cúspide de los depredadores en un planeta que comparten con los animales más temibles de la creación.', '/sXeWfpT1EhG7f4uBouqraOhmouH.jpg', '/flTnaBaW1UnQtzGEIoHR7C3OYfy.jpg', '2022-06-01', 122, '7', '3682', NULL, NULL, 1),
(8, 'Doctor Strange en el multiverso de la locura', 'Viaja a lo desconocido con el Doctor Strange, quien, con la ayuda de tanto antiguos como nuevos aliados místicos, recorre las complejas y peligrosas realidades alternativas del multiverso para enfrentarse a un nuevo y misterioso adversario.', '/vThe85YlGE5r7fqEVFePETqnWzk.jpg', '/gUNRlH66yNDH3NQblYMIwgZXJ2u.jpg', '2022-05-04', 2140, '7', '3348', NULL, NULL, 1),
(9, 'The Batman', 'Cuando un asesino se dirige a la élite de Gotham con una serie de maquinaciones sádicas, un rastro de pistas crípticas envía Batman a una investigación en los bajos fondos. A medida que las pruebas comienzan a acercarse a su casa y se hace evidente la magnitud de los planes del autor, Batman debe forjar nuevas relaciones, desenmascarar al culpable y hacer justicia al abuso de poder y la corrupción que durante mucho tiempo han asolado Gotham', '/zFTLPipninMF4THDbdkQUZLWMEw.jpg', '/zFTLPipninMF4THDbdkQUZLWMEw.jpg', '2022-03-01', 5010, '8', '3152', NULL, NULL, 1),
(10, 'Uncharted', 'Un descendiente del explorador Sir Francis Drake descubre la ubicación de la legendaria ciudad de El Dorado. Con la ayuda de su mentor Victor Sullivan y la ambiciosa periodista Elena Fischer, Nathan Drake trabajará para descubrir sus secretos, mientras sobreviven en una isla llena de piratas, mercenarios, y un misterioso enemigo, se embarcarán en una búsqueda sin precedentes por alcanzar el tesoro antes que sus perseguidores. Adaptación del aclamado videojuego homónimo.', '/8FiWi61YRbkN95xmH668iq5sCo1.jpg', '/aEGiJJP91HsKVTEPy1HhmN0wRLm.jpg', '2022-02-10', 2294, '7', '3440', NULL, NULL, 1),
(11, 'Spider-Man: No Way Home', 'Spider-Man: No Way Home\",', '/rJPGPZ5soaG27MK90oKpioSiJE2.jpg', '/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg', '2021-12-15', 13303, '8', '3165', NULL, NULL, 1),
(12, 'Red', 'Mei Lee, una niña de 13 años un poco rara pero segura de sí misma, se debate entre ser la hija obediente que su madre quiere que sea y el caos propio de la adolescencia. Ming, su protectora y ligeramente exigente madre, no se separa nunca de ella lo que es una situación poco deseable para una adolescente. Y por si los cambios en su vida y en su cuerpo no fueran suficientes, cada vez que se emociona demasiado (lo que le ocurre prácticamente todo el tiempo), se convierte en un panda rojo gigante', '/hUupIkIKPpNLYniPGRxRpEQFrX3.jpg', '/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg', '2022-03-10', 725, '8', '2508', NULL, NULL, 1),
(13, 'Un día para morir', 'Después de matar a un miembro del sindicato de la droga mientras protege a una persona en libertad condicional, Connor Connolly tiene un día para pagar dos millones de dólares en reparaciones, dinero que no tiene, a Tyrone Pettis. Se ve obligado a pedirle a su antiguo equipo de operaciones militares, liderado por Brice Mason, que se una y de alguna manera obtenga dos millones de dólares antes de que Connor pierda a todos los que ama.', '/8Kce1utfytAG5m1PbtVoDzmDZJH.jpg', '/hcNM0HjfPonIzOVy6LVTDBXSfMq.jpg', '2022-03-04', 71, '6', '2393', NULL, NULL, 1),
(14, 'The Contractor', 'Después de ser dado de baja involuntariamente de las Fuerzas Especiales de EE. UU., James Harper decide apoyar a su familia uniéndose a una organización de contratación privada junto a su mejor amigo y bajo el mando de un compañero veterano. En el extranjero en una misión encubierta, Harper debe evadir a quienes intentan matarlo mientras regresa a casa.', '/rJPGPZ5soaG27MK90oKpioSiJE2.jpg', '/rJPGPZ5soaG27MK90oKpioSiJE2.jpg', '2022-03-10', 286, '7', '2263', NULL, NULL, 1),
(15, 'Los Tipos Malos', 'Cinco villanos notorios: el Sr. Wolf, Mr. Snake, Mr. Piranha, Mr. Shark y Ms. Tarantula, que han pasado toda una vida juntos realizando grandes atracos.', '/wFdwJh3fbhp5aiRbQelVz1mbbwP.jpg', '/fEe5fe82qHzjO4yej0o79etqsWV.jpg', '2022-03-17', 581, '8', '2118', NULL, NULL, 1),
(16, 'Chip y Chop: Los guardianes rescatadores', 'Chip \'n Dale: Rescue Rangers\",', '/cVE6Mop3gCqIZfnQEkvGV2rG0IM.jpg', '/qK7Ssnrfvrt65F66A1thvehfQg2.jpg', '2022-05-18', 446, '7', '1962', NULL, NULL, 1),
(17, 'El Exorcismo De Dios', 'Un sacerdote estadounidense que trabaja en México es considerado un santo por muchos feligreses locales. Sin embargo, debido a un exorcismo fallido, guarda un secreto que lo está comiendo vivo hasta que tenga la oportunidad de enfrentarse a su demonio por última vez.', '/wHA9cysdFmGDfIvu9iEpu19w9GK.jpg', '/jCDycDqFJ1dIv5iJfTfub2h4ZAB.jpg', '2022-02-10', 206, '7', '2299', NULL, NULL, 1),
(18, 'Moonfall', 'El mundo se enfrenta a la posibilidad de la extinción porque una fuerza desconocida empuja a la luna de su órbita rumbo a la Tierra. Un equipo de astronautas asume la misión de evitar el apocalipsis.', '2022-02-03', '/9Ngw106BLlNJ4iVpRHlrDfaLpCV.jpg', '2022-02-03', 1177, '7', '1736', NULL, NULL, 1),
(19, 'Ambulance: Plan de Huida', 'Dos hermanos roban una ambulancia tras un atraco que sale mal y deberán de trabajar juntos para escapar de la policía que los persigue.', '/hUbgg3mMSbY9PlpTxBo4IFUVSd6.jpg', '/dW3fQJrshh2wYDoW4HUA7ZabsN1.jpg', '2022-03-16', 732, '7', '1567', NULL, NULL, 1),
(20, 'Incompatibles 2', 'Ousmane Diakité (Omar Sy) y François Monge (Laurent Lafitte) son dos policías de estilo, origen y trayectoria muy distintos. Hace muchos años trabajaron juntos, pero la vida los separó. Ahora, esta insólita pareja vuelve a coincidir en una nueva investigación que los lleva a los Alpes franceses. Lo que parecía una simple operación de narcotráfico se convierte en un caso criminal de dimensiones, peligros y situaciones cómicas inesperadas.', '/qk80eBlrFpZasZTx4HmPWzkykJh.jpg', '/wtbRUVxQVvU6QIJH1oGLDThJLib.jpg', '2022-05-06', 208, '6', '1756', NULL, NULL, 1),
(21, 'My Hero Academia 3: Misión Mundial de Héroes', '\"Deku es perseguido por la policía, acusado de asesinato en masa, mientras que el resto de super héroes han de enfrentarse a un incidente que afecta a todo el mundo. Tercera película de la serie anime \\\"My Hero Academia', '/u9JXGdxsb7jbRhqaeVWzCBwiY19.jp', '/cugmVwK0N4aAcLibelKN5jWDXSx.jpg', '2022-04-06', 186, '7', '737', NULL, NULL, 1),
(22, 'Virus-32', 'Se desata un virus y una escalofriante masacre recorre las calles de Montevideo. Los enfermos se convierten en cazadores y solo calman su fiebre matando sin escrúpulos a todos los que aún no están infectados. Sin darse cuenta de esto, Iris y su hija pasan el día en el club deportivo donde Iris trabaja como guardia de seguridad. Cuando llega la noche, está por comenzar una pelea sin piedad. Su única esperanza de salvación llega cuando descubren que después de cada ataque los infectados parecen tener 32 segundos de paz antes de volver a cargar.', '/3CvBuw9aoziJJAbqymmsF2drnzH.jpg', '/i0zbSmiyyylh7H3Qb4jgscz46Pm.jpg', '2022-04-21', 74, '7', '1236', NULL, NULL, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `catalog_movies`
--
ALTER TABLE `catalog_movies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `catalog_movies`
--
ALTER TABLE `catalog_movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
