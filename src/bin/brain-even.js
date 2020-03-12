#!/usr/bin/env node
import { game, greeting, even } from '../index.js';

game(greeting('Answer "yes" if the number is even, otherwise answer "no".'), even);
