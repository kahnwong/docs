---
outline: deep
---

# Postgres

## IAM

### Create user

```sql
CREATE DATABASE $DATABASE;
CREATE USER $USER WITH ENCRYPTED PASSWORD '$PASSWORD';
GRANT ALL PRIVILEGES ON DATABASE mydb TO $USER;
```

### Create role

```sql
CREATE ROLE $ROLE WITH LOGIN PASSWORD '$PASSWORD';
```

### Grant permissions

```sql
-- admin
GRANT SELECT, INSERT, UPDATE, DELETE ON all tables IN SCHEMA public TO {ROLE};

-- readonly
GRANT SELECT ON all tables IN SCHEMA public TO {ROLE};

-- readonly-specific schema
GRANT SELECT ON {SCHEMA} TO {ROLE};

-- allow execute functions
GRANT EXECUTE ON all functions IN SCHEMA public TO user;
```

## Activity

### Get activity log

```sql
SELECT
  usename,
  datname,
  count(*)
FROM
  pg_stat_activity
GROUP BY
  usename,
  datname;
```

with runtime

```sql
SELECT
  pid,
  datname,
  usename,
  query_start,
  now () - query_start as runtime,
  query
FROM
  pg_stat_activity
ORDER BY
  runtime;
```

### Get session count

```sql
SELECT
  count(*)
FROM
  pg_stat_activity;
```

### Vacuum

```sql
-- full stats
SELECT
  relname,
  seq_scan,
  n_live_tup,
  n_dead_tup,
  n_tup_del,
  last_autovacuum,
  last_autoanalyze,
  autovacuum_count,
  autovacuum_count
FROM
  pg_stat_user_tables;

-- see alive/dead row count
SELECT
  n_live_tup,
  n_dead_tup,
  relname
FROM
  pg_stat_all_tables;

-- prune dead rows
VACUUM job_ticks;
```

### See indexing progress

```sql
SELECT
  p.phase,
  p.blocks_total,
  p.blocks_done,
  p.blocks_total - p.blocks_done as blocks_left,
  p.tuples_total,
  p.tuples_done,
  ai.schemaname,
  ai.relname,
  ai.indexrelname
FROM
  pg_stat_progress_create_index p
  JOIN pg_stat_activity a ON p.pid = a.pid
  LEFT JOIN pg_stat_all_indexes ai on ai.relid = p.relid
  AND ai.indexrelid = p.index_relid;
```

### Terminate process

```sql
SELECT * FROM pg_stat_activity;
SELECT pg_terminate_backend(${PID});
```

## Statistics

### Find most used tables

```sql
SELECT
  schemaname,
  relname,
  COALESCE(seq_scan, 0) + COALESCE(idx_scan, 0) nr_accesses
FROM
  pg_stat_all_tables
WHERE
  schemaname = 'public'
ORDER BY
  3 DESC NULLS LAST;
```

### Get table size

```sql
SELECT
  table_name,
  pg_relation_size (quote_ident (table_name)),
  pg_size_pretty (pg_relation_size (quote_ident (table_name)))
FROM
  information_schema.tables
WHERE
  table_schema = 'public'
ORDER BY
  pg_total_relation_size (quote_ident (table_name)) DESC;
```

### Get index size

```sql
SELECT
  relname as table_name,
  pg_size_pretty (pg_total_relation_size (relid)) As "Total Size",
  pg_size_pretty (pg_indexes_size (relid)) as "Index Size",
  pg_size_pretty (pg_relation_size (relid)) as "Actual Size"
FROM
  pg_catalog.pg_statio_user_tables
ORDER BY
  pg_total_relation_size (relid) DESC;
```

## Collation

```bash
CREATE DATABASE $your_database_name LC_COLLATE='th_TH.utf8' LC_CTYPE='th_TH.utf8' TEMPLATE=template0;
```

### Backup and restore

```bash
# backup
$ pg_dump --host HOST --port 5432 --username USERNAME --format plain --verbose --file OUTFILE.sql --table public.TABLE_NAME DB_NAME
$ psql --host HOST --port 5432 --username USERNAME -d DB_NAME < BACKUP.sql

## another variant
# compression rate: 10x
$ pg_dump --host $HOST --port $PORT --username $USERNAME --dbname $DBNAME -t $TABLE_NAME -Fc -f $FILENAME.bin
$ pg_restore --host $HOST --port $PORT --username $USERNAME --dbname $DBNAME --no-owner --no-privileges  $FILENAME.bin
```

## PSQL

```bash
# list databases
\l

# list tables
\dt

# list column dtypes
\d+ table_name

# list indexes and size
\di+ {INDEX_PREFIX}*

# select database
\c {DB_NAME}

# login
psql -h HOST -d DB_NAME -U USER

# export to csv
db> \copy (SELECT  * FROM district_boundary) TO '~/Downloads/file.tsv' WITH (FORMAT CSV, HEADER, DELIMITER E'\t')

# export stdout to file
db> \o out.txt
```

## Troubleshooting

- [PANIC: could not locate a valid checkpoint record](https://stackoverflow.com/questions/8799474/postgresql-error-panic-could-not-locate-a-valid-checkpoint-record)

## Tools

- [PostgreSQL Configurator](https://pgconfigurator.cybertec-postgresql.com/)

## Playground

- [Supabase WASM](https://wasm.supabase.com/) - PostgreSQL in the Browser

## Resources

- [How to JSON in PostgreSQL](https://ftisiot.net/postgresqljson/main/)
- [Postgres Tips & Tricks](https://www.crunchydata.com/postgres-tips)
- [Postgres Tutorials](https://www.crunchydata.com/developers/tutorials)
