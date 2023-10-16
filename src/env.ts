import { envsafe, str, bool } from "envsafe";

export const env = envsafe({
  R2_ACCESS_KEY: str(),
  R2_SECRET_KEY: str(),
  R2_BUCKET: str(),
  R2_REGION: str(),
  DATABASE_DUMP_URL: str({
    desc: 'The connection string of the database to backup.'
  }),
  BACKUP_CRON_SCHEDULE: str({
    desc: 'The cron schedule to run the backup on.',
    default: '0 22 * * *',
    allowEmpty: true
  }),
  R2_ENDPOINT: str({
    desc: 'The R2 custom endpoint you want to use.',
    allowEmpty: true,
  }),
  RUN_ON_STARTUP: bool({
    desc: 'Run a backup on startup of this application',
    default: true,
    allowEmpty: true,
  })
})