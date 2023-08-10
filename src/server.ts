import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import express from 'express';
import qs from 'qs';

import router from './routes';
import createClient from './sequelize';

const PORT = process.env.PORT || 3000;

async function main() {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault('UTC');

  const app = express();
  const sequelize = await createClient();

  app.set('query parser', (str: string) =>
    qs.parse(str, {
      arrayLimit: 1000,
      parseArrays: true,
      allowDots: false,
      allowPrototypes: true,
    }),
  );

  app.set('views', `${__dirname}/../views`);
  app.set('view engine', 'ejs');
  app.use(express.static(`${__dirname}/../public`));

  app.use(express.json({ limit: '1mb' }));
  app.use(express.urlencoded({ limit: '1mb', extended: true }));

  app.use('/api', router(sequelize));

  app.listen(PORT, () => {
    console.log(`Run on http://localhost:${PORT}`);
  })
}

main();