import { Link } from './Link';

export function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Este es un ejemplo para crear un React Router desde cero. Creado con el fin de practicar React y basado en el curso de Midudev.</p>
      <Link to='/about'>Ir a About</Link>
    </>
  );
}
