
# Verificar si se proporcionaron argumentos
if [ $# -eq 0 ]; then
  echo "Uso: $0 [nombre_de_carpeta1] [nombre_de_carpeta2] ..."
  exit 1
fi

# Recorrer todos los argumentos proporcionados
for nombre_carpeta in "$@"; do
  # Agregar "ex" al principio del nombre de la carpeta
  nueva_carpeta="ex${nombre_carpeta}"

  # Crear la carpeta si no existe
  if [ ! -d "$nueva_carpeta" ]; then
    mkdir "$nueva_carpeta"
    echo "Creada la carpeta: $nueva_carpeta"
  else
    echo "La carpeta $nueva_carpeta ya existe."
  fi
done
