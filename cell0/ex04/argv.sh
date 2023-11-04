#!/bin/bash

# Verificamos si se proporcionaron al menos 1 argumento
if [ $# -eq 0 ]; then
    echo "Usage: $0 <arg1> [arg2] [arg3]"
    exit 1
fi

# Mostramos los argumentos proporcionados
echo "Argumentos proporcionados:"
for arg in "$@"; do
    echo "$arg"
done

