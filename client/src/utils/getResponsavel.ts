export function getResponsavel(numero: number): string {
  if (numero >= 1 && numero <= 100) return 'Melitta';
  if (numero >= 101 && numero <= 200) return 'Comitê';
  if (numero >= 201 && numero <= 300) return 'Nokia';
  if (numero >= 301 && numero <= 400) return '2V';
  if (numero >= 401 && numero <= 500) return 'Senna';
  if (numero >= 501 && numero <= 600) return 'Taquaral';
  if (numero >= 601 && numero <= 700) return 'Beta';
  return 'Sem responsável';
}