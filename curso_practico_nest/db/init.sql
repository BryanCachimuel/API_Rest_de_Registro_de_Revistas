-- Crear la base de datos si no existe cursodb
SELECT 'CREATE DATABASE cursodb'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname='blclN')\gexec