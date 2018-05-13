import { Question } from '../classes/question';

export const QUESTIONS: Question[] = [
  // isuru
  {
    question: 'Go back to previous directory',
    answer: 'cd ..',
    points: 1,
  },
  {
    question: 'remove `abc` directory',
    answer: 'rmdir abc',
    points: 1,
  },
  {
    question: 'Delete `abc` directory and files in it',
    answer: 'rm -r abc',
    points: 1,
  },
  {
    question: 'Check manual of the `cd` command',
    answer: 'man cd',
    points: 1,
  },
  {
    question: 'Check your IP address',
    answer: 'hostname -I',
    points: 2,
  },
  // shalitha
  {
    question: 'Stage `README.md` on git',
    answer: 'git add README.md',
    points: 1,
  },
  {
    question: 'Install Docker on linux using apt',
    answer: 'sudo apt-get install docker',
    points: 2,
  },
  {
    question: 'Check whether domain ea.com accessible',
    answer: 'ping ea.com',
    points: 1,
  },
  {
    question: 'Run your test.js with node',
    answer: 'node test.js',
    points: 1,
  },
  {
    question: 'Create new directory `abc`',
    answer: 'mkdir abc',
    points: 1,
  },
  {
    question: 'Serve and open your Angular app',
    answer: 'ng serve --open',
    points: 2,
  },
  {
    question: 'List items of current directory in a column',
    answer: 'ls -1',
    points: 1,
  },
  {
    question: 'Install dependencies in package.json',
    answer: 'npm install',
    points: 1,
  },
  {
    question: 'Rename `a.txt` to `b.txt`',
    answer: 'mv a.txt b.txt',
    points: 1,
  },
  {
    question: 'Install and save expressjs',
    answer: 'npm install express --save',
    points: 2,
  },
  {
    question: 'Display first line of `a.txt` using head and cat',
    answer: 'cat a.txt | head -1',
    points: 3,
  },
  // dilantha
  {
    question:
      'move `a.txt` to `a` folder which is in the current user`s home directory',
    answer: 'mv a.txt ~/a/a.txt',
    points: 2,
  },
  {
    question: 'Search for word `randy` in all files recursively',
    answer: 'grep -r "randy" *',
    points: 2,
  },
  {
    question: 'Sort the content of the file test.txt in ascending order',
    answer: 'sort test.txt',
    points: 2,
  },
  {
    question: 'Sort the content of the file test.txt in descending order',
    answer: 'sort -r test.txt',
    points: 2,
  },
];
