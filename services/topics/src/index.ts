/*
 Copyright 2022 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

import express, {Application, Request, Response} from 'express';

const {EXTERNAL_PORT, PORT, TOPICS_SERVER_HOST, DSP_HOST} = process.env;

const app: Application = express();

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const ICONS = {
  'motorcycles': '#x1F3CD;',
  'soccer': '#x26bd;',
  'gardening': '#x1F333;',
};

app.use((req, res, next) => {
  next();
});
app.use(express.static('src/public'));
app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.get('/', async (req: Request, res: Response) => {
  const hostname = req.hostname;
  const title = hostname.substring(0, hostname.indexOf('.'));

  console.log('TITLE:' + title);
  const params = {
    title,
    TOPICS_SERVER_HOST,
  };
  res.render('index', params);
});

app.get('/static-ad', async (req: Request, res: Response) => {
  const hostname = req.hostname;
  const title = hostname.substring(0, hostname.indexOf('.'));
  const icon = ICONS[title as keyof typeof ICONS];

  console.log('TITLE:' + title);
  const params = {
    title,
    icon,
    DSP_HOST,
    EXTERNAL_PORT,
    lorem: LOREM,
  };
  res.render('static-ad', params);
});

app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT}`);
});
